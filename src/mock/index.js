import Mock from 'mockjs'
const Random = Mock.Random

function getIds(n) {
    var ids = new Array()
    for(let i = 0; i < n; i++){
        ids[i] = Random.id()
    }
    
    return ids;
}

Mock.mock('/recommend', 'get', getIds(10))

Mock.mock(RegExp('/contentsIntro/.+'), 'get', ()=>{
    const content = Mock.mock({
        id: '@id',
        title: '@title',
        "cover|1": [
            "http://localhost:4000/src/assets/images/12345.png",
            "http://localhost:4000/src/assets/images/179540.jpg",
            "http://localhost:4000/src/assets/images/464648.jpg",
            "http://localhost:4000/src/assets/images/225471.jpg",
            ""
            ],
        intro: Random.cparagraph(),
        "video|1": [
            "src/assets/video/HeartbreakAnniversary.mp4",
            "src/assets/video/SaveYourTears.mp4",
            ],
        "audio|1": [
            "src/assets/audio/GrazeTheRoof.mp3",
            "src/assets/audio/Love Of My Life.mp3",
            ],
        time: Mock.mock('@date("yyyy-yy-y-MM-M-dd-d")'),
        type: Mock.mock('@integer(0, 2)'),
        feedback: {
            like: Mock.mock('@integer(60, 100)'),
            approve: Mock.mock('@integer(60, 100)'),
            comment: Mock.mock('@integer(60, 100)'),
            views: Mock.mock('@integer(60, 100)')
        },
        author: {
            uid : Mock.mock('@integer'),
            avatar: "http://localhost:4000/src/assets/images/avatar.jpg",
            username: Mock.mock('@name')
        }
    })

    return content
})
