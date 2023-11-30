<script setup>

</script>

<template>
    <div class="learning-hub">
        <div class="weekly-learning">
            <div class="learning-graph">
                学习进度图
            </div>
            <div class="container-under-graph">
                描述
            </div>
        </div>
        <div class="learning-operation">
            <RouterLink to="/exercise/word"><div class="learning-exercise-btn">背单词</div></RouterLink>
            <RouterLink to="/exercise/question"><div class="learning-exercise-btn">做题目</div></RouterLink>
            <RouterLink to="/exercise/pronunciation"><div class="learning-exercise-btn">口语练习</div></RouterLink>
        </div>
        <div class="learning-progress">
            <div class="learning-achievement">
                <span>已经熟练掌握了2236个单词</span>
            </div>
            <div class="learning-schedule">
                <div class="schedule-subject">英语四级词库</div>
                <div class="schedule-subject">计算机英语</div>
                <div class="schedule-subject">英语四级题库</div>
                <div class="schedule-subject">add more</div>
            </div>
        </div>
        <div class="unable-memorize-top20">
            <div class="container-above-top20">
                最难记住的20个单词
            </div>
            <div class="top20-graph">
                <div class="top20-words">
                    <div class="top20-word">word1</div>
                    <div class="top20-word">word2</div>
                    <div class="top20-word">word3</div>
                    <div class="top20-word">word4</div>
                    <div class="top20-word">word5</div>
                    <div class="top20-word">word6</div>
                    <div class="top20-word">word7</div>
                    <div class="top20-word">word8</div>
                    <div class="top20-word">word9</div>
                    <div class="top20-word">word10</div>
                    <div class="top20-word">word11</div>
                    <div class="top20-word">word12</div>
                    <div class="top20-word">word13</div>
                    <div class="top20-word">word14</div>
                    <div class="top20-word">word15</div>
                    <div class="top20-word">word16</div>
                    <div class="top20-word">word17</div>
                    <div class="top20-word">word18</div>
                    <div class="top20-word">word19</div>
                    <div class="top20-word">word20</div>
                </div>
                <div class="top20-weight">

                </div>
            </div>
            <div class="container-under-top20">

            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .learning-hub{
        display: flex;
        align-items: center;
        flex-direction: column;

        .weekly-learning{
            height: 300px;
            width: 60%;
            border: solid rgb(255, 0, 21) 2px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .learning-graph{
                margin-top: 25px;
                height: 70%;
                width: 90%;
                border: solid rgb(0, 255, 98) 2px;
            }

            .container-under-graph{
                height: 15%;
                width: 90%;
                border: solid rgb(0, 255, 98) 2px;
            }
        }

        .learning-operation{
            width: 60%;
            border: solid rgb(0, 255, 98) 2px;
            padding: 20px;
            display: flex;
            justify-content: center;


            .learning-exercise-btn{
                height: 50px;
                width: 130px;
                border: solid rgb(0, 89, 255) 2px;
                margin: 15px;
            }

        }

        .learning-progress{
            width: 60%;
            border: solid rgb(0, 26, 255) 2px;
            padding: 20px;
            display: flex;

            .learning-achievement{
                height: 200px;
                width: 130px;
                border: solid rgb(94, 255, 0) 2px;
            }

            .learning-schedule{
                display: flex;
                margin-left: 35px;
                width: 83%;


                .schedule-subject{
                    height: 200px;
                    width: 130px;
                    border: solid red 2px;
                    margin: 0 10px 0 10px;
                }
            }
        }

        .unable-memorize-top20{
            width: 60%;
            border: solid rgb(0, 26, 255) 2px;
            padding: 20px;
            display: flex;
            flex-direction: column;

            .container-above-top20{
                height: 50px;
                border: solid rgb(0, 195, 255) 2px;
            }

            .top20-graph{
                border: solid rgb(102, 255, 0) 2px;
                padding: 20px;
                display: flex;

                .top20-words{
                    border: solid rgb(255, 0, 200) 2px;
                    margin-left:10px;

                    .top20-word{
                        margin: 15px;
                    }
                }

                .top20-weight{
                    border: solid rgb(0, 174, 255) 2px;
                    width: 90%;
                }
            }

            .container-under-top20{
                height: 50px;
                border: solid rgb(0, 195, 255) 2px;
                
            }
        }
    }
</style>