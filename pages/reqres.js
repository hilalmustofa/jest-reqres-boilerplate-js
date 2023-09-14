const supertest = require('supertest');

async function CreateUser(name, job) {
    try {
        const res = await supertest(process.env.baseurl)
            .post("/api/users")
            .set("Content-Type", "application/json")
            .send({
                "name": name,
                "job": job
            });
        return res;
    } catch (error) {
        throw(error);
    }
}

async function GetUserList() {
    try {
        const res = await supertest(process.env.baseurl)
            .get("/api/users")
            .set("Content-Type", "application/json")
            .send();
        return res;
    } catch (error) {
        throw(error);
    }
}

async function UpdateUser(name, job) {
    try {
        const res = await supertest(process.env.baseurl)
            .put("/api/users/2")
            .set("Content-Type", "application/json")
            .send({
                "name": name,
                "job": job
            });
        return res;
    } catch (error) {
        throw(error);
    }
}

async function DeleteUser(userid) {
    try {
        const res = await supertest(process.env.baseurl)
            .delete(`/api/users/${userid}`)
            .set("Content-Type", "application/json")
            .send();
        return res;
    } catch (error) {
        throw(error);
    }
}

module.exports = {
    CreateUser,
    GetUserList,
    UpdateUser,
    DeleteUser
};