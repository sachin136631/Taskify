import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app=express();
const port =3001;
let actual_object;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"todo",
    port:5432,
});
db.connect();

app.post("/submit",async(req,res)=>{
    const items=req.body.things;
    try{
        if(items!=""){
        await db.query("INSERT INTO sachin (sadhanam) VALUES ($1)",[items]);
        const result=await db.query("select id,sadhanam from sachin");
        actual_object=(result.rows);
        res.redirect("/");
    }}catch(err){
        console.log(err);
        res.redirect("/");
    }
});

app.post("/delete",async(req,res)=>{
    const id=req.body.id;
    try{
        await db.query("DELETE FROM sachin WHERE id = $1",[id]);
        const result=await db.query("select id,sadhanam from sachin");
        actual_object=result.rows;
        res.redirect("/");
    }catch(err){
        console.log(err);
        res.redirect("/");
    }
});

app.post("/edit",async(req,res)=>{
    const id=req.body.id;
    const newtask=req.body.newtask;
    try{
        if(newtask!==""){
            await db.query("update sachin set sadhanam= $1 where id= $2 ",[newtask,id]);
            const result=await db.query("select id,sadhanam from sachin");
            actual_object=result.rows;
            res.redirect("/");
        }
        else{
            res.redirect("/");
        }
    }catch(err){
        console.log(err);
        res.redirect("/");
    }
});

app.get("/",(req,res)=>{
    res.render("index.ejs",{content_of_the_div:actual_object});
});


app.listen(port,()=>{
    console.log(`the server is running live on ${port}`);
});