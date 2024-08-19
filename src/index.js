import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
// import emailjs from "@emailjs/browser";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// const styles = {
//     paddingX: "sm:px-16 px-6",
//     paddingY: "sm:py-16 py-6",
//     padding: "sm:px-16 px-6 sm:py-16 py-10",

//     heroHeadText:
//         "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[30px] lg:leading-[98px] mt-2",
//     heroSubText:
//         "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

//     sectionHeadText:
//         "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
//     sectionSubText:
//         "lg:text-[18px] sm:text-[14px] text-secondary uppercase sm:z-wider",
// };

// const Contact = () => {
//     let form = {
//         name: "",
//         email: "",
//         message: "",
//     }

//     let loading = false

//     const handleChange = (e) => {
//         const { target } = e;
//         const { name, value } = target;

//         form = {
//             ...form,
//             [name]: value,
//         };
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         loading = true;

//         emailjs
//             .send(
//                 "service_ynbyyjs",
//                 "template_bg7bsox",
//                 {
//                     from_name: form.name,
//                     to_name: "Agu Ogan Success",
//                     from_email: form.email,
//                     to_email: "aguogansuccess@gmail.com",
//                     message: form.message,
//                 },
//                 "yK4SoYYQBW1Ts51cf"
//             )
//             .then(
//                 () => {
//                     loading = false
//                     alert("Thank you. I will get back to you as soon as possible.");

//                     form = {
//                         name: "",
//                         email: "",
//                         message: "",
//                     };
//                 },
//                 (error) => {
//                     loading = false;
//                     console.error(error);

//                     alert("Ahh, something went wrong. Please try again.");
//                 }
//             );
//     };
// };

// className={styles.sectionHeadText}  className={styles.sectionSubText}