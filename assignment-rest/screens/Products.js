import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList, Image, TouchableOpacity, Button } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Products = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryTitle } = route.params;

  // Example product data categorized by type
const productsByCategory = [
    {
      title: 'Foot-Wear',
      data: [
        {
          id:1,
          title: "Active Men Running Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/vzC6KzxUrPC5U2rvcfck1qfe",
          price: "$5.50",
          category:"Men",
        },
        {
          id:2,
          title: "X1 Men Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/A5zHEXStvFKHc8H8NFUg2FpG",
          price: "$3.00",
          category:"Men",
        },
        {
          id:3,
          title: "Flomo Men Running Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/X2aMtdY5VkXDT9CCWkGj8JXy",
          price: "$10.00",
          category:"Men",
        },
        {
          id:4,
          title: "Windblazer Men Running Shoe",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rDJN48sJ2WYbCn9SBHSFggZc",
          price: "$5.30",
          category:"Men",
        },
        {
          id:5,
          title: "X1 Women Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/DjLjUrxWhPEXjbWXrxBPmbit",
          price: "$15.70",
          category:"Women",
        },
        {
          id:6,
          title: "X1 Men Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/Mwr3NB9m7fDyxYD7jPeAFQKe",
          price: "$8.00",
          category:"Men",
        },
        {
          id:7,
          title: "Avant Men's Ultra Light Running and Training Shoes - Grey",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/5sHoEZg9p6WK69BR4XLPrnPQ",
          price: "$7.50",
          category:"Men",
        },
        {
          id:8,
          title: "Crosstrain Men Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/n5KdCxCpmsr4pnmutKqqnFPe",
          price: "$12.20",
          category:"Men",
        },
        {
          id:1,
          title: "Active Men Running Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/vzC6KzxUrPC5U2rvcfck1qfe",
          price: "$5.50",
          category:"Men",
        },
        {
          id:2,
          title: "X1 Men Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/A5zHEXStvFKHc8H8NFUg2FpG",
          price: "$3.00",
          category:"Men",
        },
        {
          id:3,
          title: "Flomo Men Running Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/X2aMtdY5VkXDT9CCWkGj8JXy",
          price: "$10.00",
          category:"Men",
        },
        {
          id:4,
          title: "Windblazer Men Running Shoe",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rDJN48sJ2WYbCn9SBHSFggZc",
          price: "$5.30",
          category:"Men",
        },
        {
          id:5,
          title: "X1 Women Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/DjLjUrxWhPEXjbWXrxBPmbit",
          price: "$15.70",
          category:"Women",
        },
        {
          id:6,
          title: "X1 Men Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/Mwr3NB9m7fDyxYD7jPeAFQKe",
          price: "$8.00",
          category:"Men",
        },
        {
          id:7,
          title: "Avant Men's Ultra Light Running and Training Shoes - Grey",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/5sHoEZg9p6WK69BR4XLPrnPQ",
          price: "$7.50",
          category:"Men",
        },
        {
          id:8,
          title: "Crosstrain Men Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/n5KdCxCpmsr4pnmutKqqnFPe",
          price: "$12.20",
          category:"Men",
        },
        {
          id:1,
          title: "Active Men Running Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/vzC6KzxUrPC5U2rvcfck1qfe",
          price: "$5.50",
          category:"Men",
        },
        {
          id:2,
          title: "X1 Men Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/A5zHEXStvFKHc8H8NFUg2FpG",
          price: "$3.00",
          category:"Men",
        },
        {
          id:3,
          title: "Flomo Men Running Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/X2aMtdY5VkXDT9CCWkGj8JXy",
          price: "$10.00",
          category:"Men",
        },
        {
          id:4,
          title: "Windblazer Men Running Shoe",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rDJN48sJ2WYbCn9SBHSFggZc",
          price: "$5.30",
          category:"Men",
        },
        {
          id:5,
          title: "X1 Women Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/DjLjUrxWhPEXjbWXrxBPmbit",
          price: "$15.70",
          category:"Women",
        },
        {
          id:6,
          title: "X1 Men Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/Mwr3NB9m7fDyxYD7jPeAFQKe",
          price: "$8.00",
          category:"Men",
        },
        {
          id:7,
          title: "Avant Men's Ultra Light Running and Training Shoes - Grey",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/5sHoEZg9p6WK69BR4XLPrnPQ",
          price: "$7.50",
          category:"Men",
        },
        {
          id:8,
          title: "Crosstrain Men Training Shoes",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/n5KdCxCpmsr4pnmutKqqnFPe",
          price: "$12.20",
          category:"Men",
        },
      ]
    },
    {
      title: 'Pants',
      data: [
        {
          id:1,
          title: "Seamless Jacquard Tights",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rjw9oJAvgPcGVR5xra33FsCc",
          price: "$5.50",
          category:"Women", 
        },
        {
          id:2,
          title: "Solid High Waist Straight Pants with Pockets",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/YiUo6vKjXEd5x1vVRn37Dacy",
          price: "$3.00",
          category:"Women", 
        },
        {
          id:3,
          title: "Seamless Form Leggings",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/u79gUGd8psjnBKBUpoKtR9y8",
          price: "$10.00",
          category:"Women", 
        },
        {
          id:4,
          title: "AbsoluteFit Essential Black Tights With Pockets",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/QtuoG2UHSKtq84Spp5b3kT73",
          price: "$5.30",
          category:"Women", 
        },
        {
          id:5,
          title: "Solid High Waist Straight Pants with Pocket",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/ktrLkpbz1fkQyeCr9JrTqYgC",
          price: "$15.70",
          category:"Women", 
    
        },
        {
          id:6,
          title: "Seamless Squat Proof Leggings",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/LXiuSHLgWXm7Kfq8Atce3WKK",
          price: "$8.00",
          category:"Women", 
    
        },
        {
          id:7,
          title: "AbsoluteFit Abstract Print Tights",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/ay58KZVzaorEZCrbV7KBmpQ2",
          price: "$7.50",
          category:"Women", 
    
        },
        {
          id:8,
          title: "Floral Ombre Yoga Tights with Side Pocket",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rfSpSusUV7WwZ8B7iDMMsovQ",
          price: "$12.20",
          category:"Women", 
    
        },
        {
          id:1,
          title: "Seamless Jacquard Tights",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rjw9oJAvgPcGVR5xra33FsCc",
          price: "$5.50",
          category:"Women", 
        },
        {
          id:2,
          title: "Solid High Waist Straight Pants with Pockets",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/YiUo6vKjXEd5x1vVRn37Dacy",
          price: "$3.00",
          category:"Women", 
        },
        {
          id:3,
          title: "Seamless Form Leggings",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/u79gUGd8psjnBKBUpoKtR9y8",
          price: "$10.00",
          category:"Women", 
        },
        {
          id:4,
          title: "AbsoluteFit Essential Black Tights With Pockets",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/QtuoG2UHSKtq84Spp5b3kT73",
          price: "$5.30",
          category:"Women", 
        },
        {
          id:5,
          title: "Solid High Waist Straight Pants with Pocket",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/ktrLkpbz1fkQyeCr9JrTqYgC",
          price: "$15.70",
          category:"Women", 
    
        },
        {
          id:6,
          title: "Seamless Squat Proof Leggings",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/LXiuSHLgWXm7Kfq8Atce3WKK",
          price: "$8.00",
          category:"Women", 
    
        },
        {
          id:7,
          title: "AbsoluteFit Abstract Print Tights",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/ay58KZVzaorEZCrbV7KBmpQ2",
          price: "$7.50",
          category:"Women", 
    
        },
        {
          id:8,
          title: "Floral Ombre Yoga Tights with Side Pocket",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rfSpSusUV7WwZ8B7iDMMsovQ",
          price: "$12.20",
          category:"Women", 
    
        },
        {
          id:1,
          title: "Seamless Jacquard Tights",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rjw9oJAvgPcGVR5xra33FsCc",
          price: "$5.50",
          category:"Women", 
        },
        {
          id:2,
          title: "Solid High Waist Straight Pants with Pockets",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/YiUo6vKjXEd5x1vVRn37Dacy",
          price: "$3.00",
          category:"Women", 
        },
        {
          id:3,
          title: "Seamless Form Leggings",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/u79gUGd8psjnBKBUpoKtR9y8",
          price: "$10.00",
          category:"Women", 
        },
        {
          id:4,
          title: "AbsoluteFit Essential Black Tights With Pockets",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/QtuoG2UHSKtq84Spp5b3kT73",
          price: "$5.30",
          category:"Women", 
        },
        {
          id:5,
          title: "Solid High Waist Straight Pants with Pocket",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/ktrLkpbz1fkQyeCr9JrTqYgC",
          price: "$15.70",
          category:"Women", 
    
        },
        {
          id:6,
          title: "Seamless Squat Proof Leggings",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/LXiuSHLgWXm7Kfq8Atce3WKK",
          price: "$8.00",
          category:"Women", 
    
        },
        {
          id:7,
          title: "AbsoluteFit Abstract Print Tights",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/ay58KZVzaorEZCrbV7KBmpQ2",
          price: "$7.50",
          category:"Women", 
    
        },
        {
          id:8,
          title: "Floral Ombre Yoga Tights with Side Pocket",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rfSpSusUV7WwZ8B7iDMMsovQ",
          price: "$12.20",
          category:"Women", 
    
        },
      ]
    },
    {
      title: 'T-Shirts',
      data: [
        {
          id:1,
          title: "Odour-Resistant Running t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/wFdGUmoYyELyg9MRcfkDmxho",
          price: "$5.50",
          category:"Men",
    
        },
        {
          id:2,
          title: "Melange Performance t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/47njzyY5GJRtpbTErqsU2J83",
          price: "$3.00",
          category:"Men",
        },
        {
          id:3,
          title: "Graphic Print Running t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/yV8P8U7Pd33zphikQRXZDn1h",
          price: "$10.00",
          category:"Men",
        },
        {
          id:4,
          title: "Graphic Print Training t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/PHx7skZy3gMFConddxgqiDLq",
          price: "$5.30",
          category:"Women",
        },
        {
          id:5,
          title: "Graphic Print Running t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rfPRcj3bf6E2a7S3ME1Astnu",
          price: "$15.70",
          category:"Men",
        },
        {
          id:6,
          title: "typographic Print Everday t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/HGHgcWBe9Pxf1CrK7nMaFuZA",
          price: "$8.00",
          category:"Women",
        },
        {
          id:7,
          title: "Graphic Print Performance T-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/NsRHkXxkZmsQvcyuFZi2AkJd",
          price: "$7.50",
          category:"Men",
        },
        {
          id:8,
          title: "Logo Print Yoga t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/bs5jnZMizNCcMgUBxXpkN44Q",
          price: "$12.20",
          category:"Men",
        },
        {
          id:1,
          title: "Odour-Resistant Running t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/wFdGUmoYyELyg9MRcfkDmxho",
          price: "$5.50",
          category:"Men",
    
        },
        {
          id:2,
          title: "Melange Performance t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/47njzyY5GJRtpbTErqsU2J83",
          price: "$3.00",
          category:"Men",
        },
        {
          id:3,
          title: "Graphic Print Running t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/yV8P8U7Pd33zphikQRXZDn1h",
          price: "$10.00",
          category:"Men",
        },
        {
          id:4,
          title: "Graphic Print Training t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/PHx7skZy3gMFConddxgqiDLq",
          price: "$5.30",
          category:"Women",
        },
        {
          id:5,
          title: "Graphic Print Running t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rfPRcj3bf6E2a7S3ME1Astnu",
          price: "$15.70",
          category:"Men",
        },
        {
          id:6,
          title: "typographic Print Everday t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/HGHgcWBe9Pxf1CrK7nMaFuZA",
          price: "$8.00",
          category:"Women",
        },
        {
          id:7,
          title: "Graphic Print Performance T-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/NsRHkXxkZmsQvcyuFZi2AkJd",
          price: "$7.50",
          category:"Men",
        },
        {
          id:8,
          title: "Logo Print Yoga t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/bs5jnZMizNCcMgUBxXpkN44Q",
          price: "$12.20",
          category:"Men",
        },
        {
          id:1,
          title: "Odour-Resistant Running t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/wFdGUmoYyELyg9MRcfkDmxho",
          price: "$5.50",
          category:"Men",
    
        },
        {
          id:2,
          title: "Melange Performance t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/47njzyY5GJRtpbTErqsU2J83",
          price: "$3.00",
          category:"Men",
        },
        {
          id:3,
          title: "Graphic Print Running t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/yV8P8U7Pd33zphikQRXZDn1h",
          price: "$10.00",
          category:"Men",
        },
        {
          id:4,
          title: "Graphic Print Training t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/PHx7skZy3gMFConddxgqiDLq",
          price: "$5.30",
          category:"Women",
        },
        {
          id:5,
          title: "Graphic Print Running t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/rfPRcj3bf6E2a7S3ME1Astnu",
          price: "$15.70",
          category:"Men",
        },
        {
          id:6,
          title: "typographic Print Everday t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/HGHgcWBe9Pxf1CrK7nMaFuZA",
          price: "$8.00",
          category:"Women",
        },
        {
          id:7,
          title: "Graphic Print Performance T-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/NsRHkXxkZmsQvcyuFZi2AkJd",
          price: "$7.50",
          category:"Men",
        },
        {
          id:8,
          title: "Logo Print Yoga t-shirt",
          description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo iste dolorum eius deserunt temporibus? Odio quod iste assumenda itaque possimus tenetur accusamus porro provident. Dolor amet temporibus dignissimos numquam.",
          img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_300,h_400,ar_0.75,c_fill,q_70/dpr_1.5/cultgear-content/bs5jnZMizNCcMgUBxXpkN44Q",
          price: "$12.20",
          category:"Men",
        },
      ]
    },
  ];








  const filteredProducts = productsByCategory.find(category => category.title === categoryTitle)?.data || [];

  const [favorites, setFavorites] = useState([]);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const lightThemeColors = {
    background: '#f0f0f0',
    text: '#000',
    categoryTitleBackground: '#ccc',
    categoryTitleText: '#000',
    productBackground: '#fff',
    productBorder: '#ccc',
    productText: '#000',
    priceText: 'green',
  };

  const darkThemeColors = {
    background: '#222',
    text: '#fff',
    categoryTitleBackground: '#444',
    categoryTitleText: '#fff',
    productBackground: '#333',
    productBorder: '#555',
    productText: '#fff',
    priceText: 'lightgreen', 
  };
  const colors = isDarkTheme ? darkThemeColors : lightThemeColors;
  const containerStyle = {
    ...styles.container,
    backgroundColor: colors.background,
  };
  const categoryTitleStyle = {
    ...styles.categoryTitle,
    backgroundColor: colors.categoryTitleBackground,
    color: colors.categoryTitleText,
  };
  const productStyle = {
    ...styles.product,
    backgroundColor: colors.productBackground,
    borderColor: colors.productBorder,
  };
  const textStyle = {
    color: colors.text,
    fontFamily: 'Roboto', 
    fontSize: 16, 
  };

  const addToFavorites = (productId) => {
    const productToAdd = filteredProducts.find(product => product.id === productId);
    if (productToAdd && !favorites.some(item => item.id === productId)) {
      setFavorites([...favorites, productToAdd]);
    }
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter(item => item.id !== productId);
    setFavorites(updatedFavorites);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={productStyle}
      onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
    >
      <Image
        source={{ uri: item.img }}
        style={styles.image}
      />
      <View style={styles.productDetails}>
        <Text style={[styles.name, textStyle]}>{item.title}</Text>
        <Text style={[styles.description, textStyle]}>{item.description}</Text>
        <Text style={[styles.price, { ...textStyle, color: colors.priceText }]}>{item.price}</Text>
        {favorites.some(fav => fav.id === item.id) ? (
          <Button title="Remove from Favorites" onPress={() => removeFromFavorites(item.id)} />
        ) : (
          <Button title="Add to Favorites" onPress={() => addToFavorites(item.id)} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={containerStyle}>
      <Text style={categoryTitleStyle}>{categoryTitle}</Text>
      <SectionList
        sections={[{ data: filteredProducts }]}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={renderItem}
      />
      <Button
        title={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        onPress={toggleTheme}
      />
      <Button
        title="View Favorites"
        onPress={() => navigation.navigate('Favorites', { favorites })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  categoryTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  product: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 100,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Products;
