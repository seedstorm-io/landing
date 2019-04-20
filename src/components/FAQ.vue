<template>
    <div id="faq" class="faq">
        <div class="card border-top-0 border-left-0 border-right-0 border-bottom">
            <div class="card-body bg-white border-0" id="headingOne">
                <h5 class="p-1 mb-0" data-toggle="collapse" data-target="#question1">
                    <i class="fas float-right fa-plus"></i>
                    How to contact with Customer Service ?
                </h5>
            </div>
            <div id="question1" class="collapse" data-parent="#faq">
                <div class="card-body bg-white border-0 pt-0 px-4">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                </div>
            </div>
        </div>
        <div class="card border-top-0 border-left-0 border-right-0 border-bottom">
            <div class="card-body bg-white border-0" id="headingTwo">
                <h5 class="p-1 mb-0" data-toggle="collapse" data-target="#question2">
                    <i class="fas float-right fa-plus"></i>
                    App installation failed, how to update system information ?
                </h5>
            </div>
            <div id="question2" class="collapse" data-parent="#faq">
                <div class="card-body pt-0 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                </div>
            </div>
        </div>
        <div class="card border-top-0 border-left-0 border-right-0 border-bottom">
            <div class="card-body bg-white border-0" id="headingTwo">
                <h5 class="p-1 mb-0" data-toggle="collapse" data-target="#question3">
                    <i class="fas float-right fa-plus"></i>
                    Ut enim ad minima veniam, quis nostrum exercitationem ?
                </h5>
            </div>
            <div id="question3" class="collapse" data-parent="#faq">
                <div class="card-body pt-0 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                </div>
            </div>
        </div>
        <div class="card border-top-0 border-left-0 border-right-0 border-bottom">
            <div class="card-body bg-white border-0" id="headingThree">
                <h5 class="p-1 mb-0" data-toggle="collapse" data-target="#question4">
                    <i class="fas float-right fa-plus"></i>
                    Website reponse taking time, how to improve ?
                </h5>
            </div>
            <div id="question4" class="collapse" data-parent="#faq">
                <div class="card-body pt-0 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                </div>
            </div>
        </div>
        <div class="card border-top-0 border-left-0 border-right-0 border-bottom">
            <div class="card-body bg-white border-0" id="headingThree">
                <h5 class="p-1 mb-0" data-toggle="collapse" data-target="#question5">
                    <i class="fas float-right fa-plus"></i>
                    How do I use databases with ZEIT Now ?
                </h5>
            </div>
            <div id="question5" class="collapse" data-parent="#faq">
                <div class="card-body pt-0 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                </div>
            </div>
        </div>
        <div class="card border-0">
            <div class="card-body bg-white border-0" id="headingThree">
                <h5 class="p-1 mb-0" data-toggle="collapse" data-target="#question6">
                    <i class="fas float-right fa-plus"></i>
                    New update fixed all bug and issues ?
                </h5>
            </div>
            <div id="question6" class="collapse" data-parent="#faq">
                <div class="card-body pt-0 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FAQ'
}
</script>

<style scoped>
h5
{
    cursor: pointer;
    font-size: 19px;
    color: rgb(15, 33, 55);
    font-weight: 500 !important;
}

.faq
{
    box-shadow: rgba(25, 61, 101, 0.05) 0px 0px 30px 0px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(235, 235, 235);
    border-radius: 5px;
    margin: 50px 150px 100px;
}
</style>
