const EveningTeerResult = require('../../Model/PreviousResult/EveningTeerResult')
const getEveningTeerResult =  (req, res) => {
    EveningTeerResult.find({}).sort([['date', -1]]).exec(function(err, eveningteerresult){ 
        if(err){
            req.flash(
                        'error_msg',
                        err.message
                    );
                    res.redirect("/")
        }
           res.render("PreviewsResult/EveningTeerResult/ShowTeerResult", {
            eveningteerresult
        })
    });

    // try {

    //     const eveningteerresult = await EveningTeerResult.find()
    //     res.render("PreviewsResult/EveningTeerResult/ShowTeerResult", {
    //         eveningteerresult
    //     })
    // } catch (error) {
       
    //     req.flash(
    //         'error_msg',
    //         error.message
    //     );
    //     res.redirect("/")
        
    // }
}

const addEveningTeerResult = async (req, res) => {

    try {
        res.render("PreviewsResult/EveningTeerResult/AddTeerResult")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}



const createEveningTeerResult = async (req, res) => {

    try {
        
        await EveningTeerResult.create(req.body.eveningteerresult)
         req.flash(
             'success_msg',
             'Day Result   created successfully'
         );
        res.redirect("/previouseveningteerresult")
       
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}

const deleteEveningTeerResult = async (req, res) => {

    try {
        const foundeveningteerresult = await EveningTeerResult.findById(req.params.eveningteerresult_id)
        if (!foundeveningteerresult) {
           req.flash(
               'success_msg',
               'Not Found'
           );
           res.redirect("/")
        }
        foundeveningteerresult.deleteOne()
         req.flash(
             'success_msg',
             'delete successfully'
         );
        res.redirect("back")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")

    }
}

// //exporting
module.exports = {
    getEveningTeerResult,
     addEveningTeerResult,
     createEveningTeerResult,
     deleteEveningTeerResult
}