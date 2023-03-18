
    Hum 3 js ki file banate hai 
            1. context
            2. actions
            3. reducer

        # context file me hum initial state btate hai jo currently us component ki hoti hai like jab hum login karte hai tab ek object ki "initial_state" ko hum aise initialise kar sakte hai 
            { user: null > koi user nhi hai abhi
            fetchingdata: false > data fetch nhi kar rha abhi
            error: false > koi error nhi hai abhi } 
        basically at present kya ho rha hai 
        or isme hum ek wrapper bhi banate hai taki jis bhi component ko hum isme wrap kare usko or uske chilren componets ki request directly send ho sake ek component se durse me ja ja kar na ho ye sidha kaam ho koi disturbance ke bina

        # actions me hum kya kya states future me possible ho sakti hai wo declare karte hai or state change hone par kya karna hai wo btate hai like login me ye states ho skati hai
         -login start -- action: data fetch kar ke credentials ko compare   karo
         -login success -- action: data fetch karna start kardo db se jaha bhi required ho waha render karo
         -login failed -- action: kuch nhi karna no fetching no sending of data
        inke type(naam) or return kya kar rhe hai wo sab likh sakte hai

        # reducer me hum jo states actions me declare kari thi unne define karte hai properly like 
         -login start me 
            { user: null,
            fetchingdata: true,
            error:false } kar skte hai . waha hum user ke credentials as input dete hai
         -login success me hum 
            { user: user ki details db se manga sakte hai,
            fetchingdata: true,
            error:false } kar skte hai . waha hum user ki details as input dete hai jo db se milti hai
         -login fail me 
            { user: null,
            fetchingdata: false,
            error: true } kar skte hai . waha koi input nhi required hai

koi bhi request jab kisi bhi component se karte hai tab sabse phele jo wrapper(context) hota hai us component pe usse recieve hoti waha se reducer me check karte hai kya state me change aa rhe hai and then actions me un changes ke according hum kya action perform karenge wo dekhte hai  
mvc architecture se similar hai just react me usse redux/context bol sakte hai 