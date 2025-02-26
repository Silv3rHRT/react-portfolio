import Project from "../components/Project.js";

export default function Portfolio() {
  return (
    <div className="portfolio-container p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <h2 className="text-2xl font-bold col-span-2 text-center">My Projects</h2>
      
      <Project
        title="MovieNsnackinator"
        description="This website was created for people who are overwhelmed with choices for deciding what movie to watch. The website provides a movie and snack recommendation from the movies and snacks the user adds to their library. We built this project because it allowed us to demonstrate specific applications of coding skills we have gained. During this project we learned the basics of using the Bootstrap CSS framework, how to create and deploy branches for shared repo in Github, and some of the intricacies of functions in Javascript and their logic. The project was built using HTML, CSS, and JavaScript. *I was a contributor on this project and it is hosted on another contributor's Github."
        link="https://github.com/joshuag0603/movieNsnackinator"
      />

      <Project
        title="NewsStar"
        description="NewsStar is an application that allows users to search for and find the latest news articles from their favorite publishers. Use this app to make your life simpler and find articles that are top of mind! *I was a contributor on this project and it is hosted on another contributor's Github."
        link="https://github.com/themodestokid/newsstar"
      />
    </div>
  );
}