const fs = require('fs')

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}


const brands = ['سامسونگ','اپل','هوایی'];
const interals = ['32Gb','16Gb','64Gb','128Gb'];
const images = [
    'https://dkstatics-public.digikala.com/digikala-products/111460798.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/112150989.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/3696535.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://bucket-15.digicloud-oss.com/digikala-products/111473340.jpg?h=800&q=80',
    'https://bucket-15.digicloud-oss.com/digikala-products/111451913.jpg?h=800&q=80',
    'https://dkstatics-public-2.digikala.com/digikala-products/111453471.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/111592296.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://bucket-15.digicloud-oss.com/digikala-products/111095352.jpg?h=800&q=80',
    'https://dkstatics-public.digikala.com/digikala-products/1335242.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://bucket-15.digicloud-oss.com/digikala-products/110993785.jpg?h=800&q=80',
    'https://dkstatics-public.digikala.com/digikala-products/111183466.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/791592.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/791490.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/791692.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://dkstatics-public.digikala.com/digikala-products/112719086.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://bucket-15.digicloud-oss.com/digikala-products/111098531.jpg?h=800&q=80',
    'https://bucket-15.digicloud-oss.com/digikala-products/2311015.jpg?h=800&q=80',
    'https://dkstatics-public.digikala.com/digikala-products/110964172.jpg?x-oss-process=image/resize,h_800/quality,q_80',
    'https://bucket-15.digicloud-oss.com/digikala-products/4560824.jpg?h=800&q=80',
    'https://bucket-15.digicloud-oss.com/digikala-products/4560827.jpg?h=800&q=80',
    'https://bucket-15.digicloud-oss.com/digikala-products/112519631.jpg?h=800&q=80',
    'https://dkstatics-public.digikala.com/digikala-products/930613.jpg?x-oss-process=image/resize,h_800/quality,q_80'
];
const cameras = ['12 مگاپیکسل','8 مگاپیکسل', '16 مگاپیکسل', '24 مگاپیکسل'];
const oses = ['IOS','Android','WindowsPhone']
const prices = [199, 299, 399, 99, 999, 499, 599, 199, 167, 299, 145, 199, 255 ,299 , 399, 499, 456, 122, 199, 199]
const phones = [];
for(let i=0;i<50;i++){
    
    const brand = brands[randomNumber(0, brands.length)];
    const interal = interals[randomNumber(0 ,interals.length )];
    const image = images[randomNumber(0, images.length)];
    const name = `گوشی موبایل ${brand} ${interal} ${randomNumber(4, 10)}`;
    const startDate = new Date();
    startDate.setFullYear(2018);
    const date = randomDate(startDate, new Date());
    const os = oses[randomNumber(0, oses.length)];
    const price = prices[randomNumber(0, prices.length)]
    const camera = cameras[randomNumber(0 , cameras.length)];
    phones.push({ os, name, brand, image, interal, date, price, camera });
}

console.log(phones)

fs.writeFile('./data.json', JSON.stringify(phones), (err) => {
    if(err)
        return console.log(err)
    console.log('Success')
});