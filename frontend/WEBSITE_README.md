# LUXE - Modern E-Commerce Website

A beautiful, modern, and fully responsive e-commerce website built with React, TypeScript, and Tailwind CSS. Features a stunning user interface with gradient designs, smooth animations, and complete shopping cart functionality.

## 🌟 Features

### Pages
1. **Home Page** - Eye-catching hero section, featured products, and call-to-action areas
2. **Brand Story** - Company history, values, mission, timeline, and team information
3. **Shop Page** - Product archive with filtering, sorting, and search functionality
4. **Single Product Page** - Detailed product view with image gallery and related products
5. **Cart Page** - Full shopping cart with quantity controls, promo codes, and checkout summary

### Key Features
- 🛒 **Complete Shopping Cart System** - Add, remove, update quantities, persistent storage
- 🔍 **Advanced Product Filtering** - Filter by category, search, and multiple sort options
- 💳 **Promo Code System** - Built-in discount codes (LUXE10 for 10% off, SAVE20 for 20% off)
- 📱 **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🎨 **Modern UI/UX** - Gradient colors, smooth animations, hover effects
- 💾 **LocalStorage Integration** - Cart persists across browser sessions
- ⭐ **Product Ratings** - Star ratings and review counts
- 📦 **Stock Management** - Real-time stock availability display
- 🚚 **Dynamic Shipping** - Free shipping over $100
- 🧮 **Tax Calculation** - Automatic 10% tax calculation
- 🎯 **Related Products** - Smart product recommendations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 🎨 Design Highlights

### Color Scheme
- **Primary Gradient**: Purple (#9333ea) to Pink (#ec4899)
- **Background**: Gray-50 to White gradient
- **Text**: Gray-800 for headings, Gray-600/700 for body

### Typography
- Modern sans-serif font stack
- Bold headings with gradient text effects
- Readable body text with proper line spacing

### Animations
- Smooth hover effects on all interactive elements
- Scale transformations on buttons
- Fade-in animations for page loads
- Image zoom effects on hover

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header with cart counter
│   │   ├── Footer.tsx          # Footer with links and newsletter
│   │   └── ProductCard.tsx     # Reusable product card component
│   ├── context/
│   │   └── CartContext.tsx     # Global cart state management
│   ├── data/
│   │   └── products.ts         # Product data (12 products)
│   ├── pages/
│   │   ├── Home.tsx           # Landing page
│   │   ├── BrandStory.tsx     # About/brand page
│   │   ├── Shop.tsx           # Product archive
│   │   ├── SingleProduct.tsx  # Product detail page
│   │   └── Cart.tsx           # Shopping cart page
│   ├── App.tsx                # Main app with routing
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
```

## 🛠️ Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **React Router v7** - Navigation and routing
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Context API** - State management
- **LocalStorage API** - Cart persistence

## 📦 Product Categories

- Electronics (Headphones, Fitness Trackers, Speakers, etc.)
- Accessories (Watches, Sunglasses, etc.)
- Beauty (Perfumes, Skincare)
- Sports (Yoga Mats, Water Bottles)
- Bags (Backpacks, Tote Bags)

## 🎁 Promo Codes

Try these promo codes at checkout:
- **LUXE10** - Get 10% off your order
- **SAVE20** - Get 20% off your order

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📈 Performance Optimizations

- Image lazy loading
- Code splitting with React Router
- Optimized bundle size with Vite
- CSS purging with Tailwind
- LocalStorage for cart state

## 🎯 Future Enhancements

- [ ] User authentication
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Multiple payment gateways
- [ ] Order history
- [ ] Advanced filtering (price range, brand, etc.)
- [ ] Product quick view modal
- [ ] Live chat support
- [ ] Email notifications
- [ ] Social media integration

## 👥 Credits

Created with ❤️ using modern web technologies.
Images from Unsplash.

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Shopping! 🛍️**
