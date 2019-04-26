# Web Design - Jesse Dijkman
For this course we're going to design and make an accessible "component", like a date-picker, color-picker, or any other component that is relevant to our user. The user I'm going to design for is: Marijn Meijles. Marijn is spastic and can't use the web like the most of us. So I'm going to make something that is accessible for him and other people.

## Table of Contents
- [Concept](#concept-)
- [User Scenario](#user-scenario-)
- [Test 1](#test-1-)
  - [Iteration 1](#iteration-1)

## Concept 💡
My concept was a color-picker and it still is the main-component of my new concept (thanks to [Koop](https://github.com/KoopReynders)), which is a meme-maker. I don't know if Marijn is into memes, I hope so. But this seems like something that isn't accessible anywhere and can be made accessible.

## User Scenario 🤷‍
Marijn is at home looking at memes, he'd like to make a meme himself. But he want to make it with a keyboard. He just needs to upload (or refer to) an image and use it as a template. He can type the text and adjust their positions. He could also add rectangles and circles, and move them using his keyboard to adjust his meme. After he's done he needs to be able to download the meme.

## Test 1
#### Date: 18-04-2019
Marijn came to our school at 6:00 pm, and I was a bit surprised by how severe his disability was, although I watched his [interview](https://www.youtube.com/watch?v=8V25yphVEIo). The tests started and you could already tell that he didn't use the web at the same speed as us, not even close actually. By observing I saw he had trouble with accuracy. And almost right from the start we found out that he doesn't use the tab key. He mainly uses the spacebar, arrows and also the trackpad to my surprise. This meant that a lot of the other student weren't able to test well. So I asked if he'd rather have big buttons so he could use his trackpad. He said yes, which actually was the main feedback. After everyone was done testing his/her prototype, the school intercom announced that the school was going to close. And I actually had all the info I needed:
- **He does not use the tab key**
- **He does use the trackpad, spacebar and the arrow keys**
- **Buttons need to be big and close together**

These are the insight from just observing and asking two questions. So I didn't really feel like testing my app, because it didn't have really big buttons (more like medium-large). And the app was made to be used with tab or trackpad. Although I didn't test my own prototype I did gain important insights. 

### Iteration 1
The week after the tests I looked at my app, and first of decided that I didn't wan't him to upload images; because that's just an unnecessary step, which was annoying to complete with just your keys. So I looked for an API and found [one](https://api.imgflip.com/). This API has all kinds of meme-formats, and the greatest thing was... there was no need to create an account, and no authentication was needed; which for me was kind of a relief. So I used this API, created a grid like layout. Next step was to allow selection with arrow keys, and spacebar. Next step was to breakdown the editor into easily digestible sections. So now creating a meme is a step-by-step process. And because I couldn't really use the arrow keys for a number input, I made it so you can use your number keys to add-up; so if the value is 16 and you press 9, the outcome is 25.

## Test 2
#### Date: 25-04-2019
This week, one day before the deadline we had another test-session with Marijn. I was the last one. I was worried as always that it wouldn't go well, but ... it wen't pretty great actually. When he started with looking for meme-formats, I saw that the first element (which has an automatic focus) lost focus immediately; probably due to a misclick or wrong button press. So the arrow keys didn't realy work there but he didn't really have any trouble, because they were all close together and large. Then he wen't on to add the top text, which worked, it looked like he had a bit of trouble with the arrow keys, because I think focus was lost again (but I'm not sure). He went through these steps at pretty decent pace. Moving the text worked, changing the size worked. 

The only feedback I got was from Vasilis:
- **Better defaults**

I got this feedback because the text is white by default, and you couldn't read it when the background was white. Typically meme-text is white with a black border. Also the font isn't right, the main font used in memes is Impact.

### Iteration 2
Because the test session was one day prior to the deadline, I can't do everything I have on my mind. 
The things I'd like to change are:
- A way to add more text, not just top and bottom
- Font-selection
- Ability to change colors (which was possible in my first app, which is located in this repo)
- A way to switch between editing sections using the number keys or arrows
- Easy skip-button

