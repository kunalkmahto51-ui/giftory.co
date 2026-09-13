// ===============================
// GIFTORY.CO - BASIC JAVASCRIPT
// ===============================


// 1. SMOOTH SCROLL FOR INTERNAL LINKS
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") {
      e.preventDefault();
      return;
    }

    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      e.preventDefault();

      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// 2. HEADER SHADOW ON SCROLL
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.boxShadow = "0 8px 25px rgba(17, 60, 50, 0.10)";
  } else {
    header.style.boxShadow = "none";
  }
});


// 3. PRODUCT "GET QUOTE" BUTTONS
const quoteButtons = document.querySelectorAll(".product-card button");

quoteButtons.forEach(button => {
  button.addEventListener("click", () => {
    const contactSection = document.querySelector("#contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// =========================================
// CORPORATE ENQUIRY -> WHATSAPP
// =========================================

const corporateForm =
  document.querySelector("#corporateEnquiryForm");

if (corporateForm) {

  corporateForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const inputs =
      corporateForm.querySelectorAll("input");

    const textarea =
      corporateForm.querySelector("textarea");

    const companyName =
      inputs[0]?.value.trim() || "";

    const contactPerson =
      inputs[1]?.value.trim() || "";

    const phone =
      inputs[2]?.value.trim() || "";

    const email =
      inputs[3]?.value.trim() || "";

    const quantity =
      inputs[4]?.value.trim() || "";

    const budget =
      inputs[5]?.value.trim() || "";

    const message =
      textarea?.value.trim() || "";

    if (!contactPerson || !phone) {
      alert("Please enter Contact Person and Phone Number.");
      return;
    }

    if (phone.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }

    const whatsappMessage = `
Hello Giftory.co,

I would like to enquire about Corporate Gifting.

CORPORATE ENQUIRY

Company Name:
${companyName || "Not specified"}

Contact Person:
${contactPerson}

Phone:
${phone}

Email:
${email || "Not specified"}

Quantity:
${quantity || "Not specified"}

Budget:
${budget || "Not specified"}

Requirement:
${message || "Not specified"}

Please share suitable gifting options and quotation.

Thank you.
    `;

    const whatsappNumber =
      "919082698013";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(
      whatsappURL,
      "_blank"
    );

  });

}


// 5. CATEGORY EXPLORE BUTTONS
const categoryLinks = document.querySelectorAll(".category-card a");

categoryLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const categoryName =
      this.parentElement.querySelector("h3").innerText;

    alert(
      `${categoryName} collection will be added soon.`
    );
  });
});


// 6. SIMPLE SCROLL REVEAL EFFECT
const revealElements = document.querySelectorAll(
  ".category-card, .product-card, .why-grid div, .corporate-content, .about-content"
);

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  element.style.opacity = "0";
  element.style.transform = "translateY(30px)";
  element.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  revealObserver.observe(element);
});


// 7. HERO LOAD ANIMATION
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  const heroImage = document.querySelector(".hero-image");

  if (heroContent) {
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(20px)";

    setTimeout(() => {
      heroContent.style.transition = "0.8s ease";
      heroContent.style.opacity = "1";
      heroContent.style.transform = "translateY(0)";
    }, 150);
  }

  if (heroImage) {
    heroImage.style.opacity = "0";
    heroImage.style.transform = "translateX(30px)";

    setTimeout(() => {
      heroImage.style.transition = "0.9s ease";
      heroImage.style.opacity = "1";
      heroImage.style.transform = "translateX(0)";
    }, 300);
  }
});
// =================================
// CUSTOM HAMPER BUILDER
// =================================

const hamperQuoteButton =
  document.querySelector("#builderSubmit");
if (hamperQuoteButton) {

  hamperQuoteButton.addEventListener(
    "click",
    () => {

      const selectedBudget =
        document.querySelector(
          'input[name="budget"]:checked'
        );

      const selectedProducts =
        Array.from(
          document.querySelectorAll(
            '.product-options input:checked'
          )
        ).map(item => item.value);


      const selectedPersonalization =
        Array.from(
          document.querySelectorAll(
            '.personalization-options input:checked'
          )
        ).map(item => item.value);


      const quantity =
        document
          .querySelector("#hamperQuantity")
          .value.trim();


      const deliveryType =
        document
          .querySelector("#deliveryType")
          .value;


      const city =
        document
          .querySelector("#deliveryCity")
          .value.trim();


      const occasion =
        document
          .querySelector("#occasion")
          .value.trim();


      const name =
        document
          .querySelector("#builderName")
          .value.trim();


      const company =
        document
          .querySelector("#builderCompany")
          .value.trim();


      const phone =
        document
          .querySelector("#builderPhone")
          .value.trim();


      const email =
        document
          .querySelector("#builderEmail")
          .value.trim();


      const message =
        document
          .querySelector("#builderMessage")
          .value.trim();


      if (!selectedBudget) {
        alert("Please choose your budget.");
        return;
      }


      if (selectedProducts.length === 0) {
        alert(
          "Please select at least one product category."
        );
        return;
      }


      if (!quantity) {
        alert("Please enter quantity.");
        return;
      }


      if (!name || !phone) {
        alert(
          "Please enter your name and phone number."
        );
        return;
      }


      const enquiry = {

        budget: selectedBudget.value,

        products:
          selectedProducts,

        personalization:
          selectedPersonalization,

        quantity,

        deliveryType,

        city,

        occasion,

        name,

        company,

        phone,

        email,

        message
      };


      console.log(
        "Custom Hamper Enquiry:",
        enquiry
      );


      alert(
        "Thank you! Your custom hamper request has been created."
      );

    }
  );

}
// =========================================
// GIFTORY CUSTOM HAMPER WHATSAPP ENQUIRY
// =========================================

const builderSubmit = document.querySelector("#builderSubmit");

if (builderSubmit) {
  builderSubmit.addEventListener("click", () => {

    // Budget
    const selectedBudget = document.querySelector(
      'input[name="budget"]:checked'
    );

    // Products
    const selectedProducts = Array.from(
      document.querySelectorAll(
        '.product-options input:checked'
      )
    ).map(item => item.value);

    // Personalization
    const selectedPersonalization = Array.from(
      document.querySelectorAll(
        '.personalization-options input:checked'
      )
    ).map(item => item.value);

    // Quantity & delivery
    const quantity =
      document.querySelector("#hamperQuantity").value.trim();

    const deliveryType =
      document.querySelector("#deliveryType").value;

    const city =
      document.querySelector("#deliveryCity").value.trim();

    const occasion =
      document.querySelector("#occasion").value.trim();

    // Customer details
    const name =
      document.querySelector("#builderName").value.trim();

    const company =
      document.querySelector("#builderCompany").value.trim();

    const phone =
      document.querySelector("#builderPhone").value.trim();

    const email =
      document.querySelector("#builderEmail").value.trim();

    const message =
      document.querySelector("#builderMessage").value.trim();


    // =========================
    // VALIDATION
    // =========================

    if (!selectedBudget) {
      alert("Please select your budget.");
      return;
    }

    if (selectedProducts.length === 0) {
      alert("Please select at least one product.");
      return;
    }

    if (!quantity) {
      alert("Please enter quantity.");
      return;
    }

    if (!deliveryType) {
      alert("Please select delivery type.");
      return;
    }

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!phone) {
      alert("Please enter your phone number.");
      return;
    }


    // =========================
    // FORMAT VALUES
    // =========================

    let budgetText = selectedBudget.value;

    if (budgetText !== "custom") {
      budgetText = "₹" + Number(budgetText).toLocaleString("en-IN");
    } else {
      budgetText = "Custom Budget";
    }


    const productsText =
      selectedProducts.join(", ");

    const personalizationText =
      selectedPersonalization.length > 0
        ? selectedPersonalization.join(", ")
        : "No special branding selected";


    // =========================
    // WHATSAPP MESSAGE
    // =========================

    const whatsappMessage = `
Hello Giftory.co,

I would like to enquire about a custom gift hamper.

CUSTOM HAMPER REQUIREMENT

Budget Per Gift: ${budgetText}

Products:
${productsText}

Personalization:
${personalizationText}

Quantity: ${quantity}

Occasion:
${occasion || "Not specified"}

Delivery Type:
${deliveryType}

Delivery Location:
${city || "Not specified"}

CUSTOMER DETAILS

Name: ${name}

Company:
${company || "Not specified"}

Phone:
${phone}

Email:
${email || "Not specified"}

Additional Requirement:
${message || "None"}

Please share suitable options and quotation.

Thank you.
    `;


    // =========================
    // OPEN WHATSAPP
    // =========================

    const whatsappNumber = "919082698013";

    const whatsappURL =
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

  });
}
// =========================================
// GIFTORY FINAL HAMBURGER MENU
// =========================================

const giftoryMenuToggle =
  document.querySelector("#menuToggle");

const giftoryMenu =
  document.querySelector("#mobileMenu");


if (giftoryMenuToggle && giftoryMenu) {

  giftoryMenuToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    const isOpen =
      giftoryMenu.classList.toggle("active");

    giftoryMenuToggle.classList.toggle(
      "active",
      isOpen
    );

    giftoryMenuToggle.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  // CLOSE AFTER CLICKING A MENU ITEM

  giftoryMenu
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        giftoryMenu.classList.remove("active");

        giftoryMenuToggle.classList.remove("active");

        giftoryMenuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });


  // CLOSE WHEN CLICKING OUTSIDE

  document.addEventListener("click", (event) => {

    if (
      !giftoryMenu.contains(event.target) &&
      !giftoryMenuToggle.contains(event.target)
    ) {

      giftoryMenu.classList.remove("active");

      giftoryMenuToggle.classList.remove("active");

      giftoryMenuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });


  // ESC KEY CLOSE

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      giftoryMenu.classList.remove("active");

      giftoryMenuToggle.classList.remove("active");

      giftoryMenuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}
// =========================================
// SHOP GIFTS DROPDOWN - FINAL SINGLE VERSION
// =========================================

const shopGiftDropdown =
  document.querySelector(".shop-dropdown");

const shopGiftButton =
  document.querySelector("#shopDropdownBtn");

if (shopGiftDropdown && shopGiftButton) {

  shopGiftButton.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    shopGiftDropdown.classList.toggle("active");

  });

  document.addEventListener("click", function (event) {

    if (!shopGiftDropdown.contains(event.target)) {
      shopGiftDropdown.classList.remove("active");
    }

  });

}
// =========================================
// MOBILE SHOP GIFTS DROPDOWN
// =========================================

const mobileShopCategories =
  document.querySelector(".mobile-shop-categories");

const mobileShopBtn =
  document.querySelector("#mobileShopBtn");

if (mobileShopCategories && mobileShopBtn) {

  mobileShopBtn.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();

    mobileShopCategories.classList.toggle("active");

  });

}
// =========================================
// GIFTORY CATALOGUE FILTER + HIGHLIGHT
// =========================================

const giftoryFilterButtons =
  document.querySelectorAll("[data-filter]");

const giftoryProductCards =
  document.querySelectorAll(".catalogue-card");

const giftoryProductCount =
  document.querySelector("#productCount");

giftoryFilterButtons.forEach(button => {

  button.addEventListener("click", function () {

    const selectedFilter =
      this.getAttribute("data-filter");


    // REMOVE ACTIVE FROM ALL SIDEBAR BUTTONS
    giftoryFilterButtons.forEach(btn => {
      btn.classList.remove("active");
    });


    // ACTIVE SELECTED BUTTON
    this.classList.add("active");


    let visibleProducts = 0;


    giftoryProductCards.forEach(card => {

      const productCategory =
        card.getAttribute("data-category");


      // REMOVE OLD HIGHLIGHT
      card.classList.remove("selected-product");


      // VIEW ALL
      if (selectedFilter === "all") {

        card.style.display = "block";

        visibleProducts++;

      }

      // SELECTED PRODUCT
      else if (productCategory === selectedFilter) {

        card.style.display = "block";

        card.classList.add("selected-product");

        visibleProducts++;


        // SCROLL PRODUCT INTO VIEW
        setTimeout(() => {

          card.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

        }, 100);

      }

      // HIDE OTHER PRODUCTS
      else {

        card.style.display = "none";

      }

    });


    // UPDATE PRODUCT COUNT
    if (giftoryProductCount) {

      if (selectedFilter === "all") {

        giftoryProductCount.textContent =
          giftoryProductCards.length + " Products";

      } else {

        giftoryProductCount.textContent =
          visibleProducts === 1
            ? "1 Product"
            : visibleProducts + " Products";

      }

    }

  });

});
// =========================================
// GIFTORY - ALL ENQUIRE NOW -> WHATSAPP
// =========================================

document.addEventListener("DOMContentLoaded", function () {

  // Giftory WhatsApp Number
  const whatsappNumber = "919082698013";

  // Find all links on the page
  const allLinks = document.querySelectorAll("a");

  allLinks.forEach(function (link) {

    const text = link.textContent
      .trim()
      .toLowerCase();

    // Only Enquire Now buttons
    if (text.includes("enquire now")) {

      link.addEventListener("click", function (event) {

        event.preventDefault();

        // Default product name
        let productName = "a Giftory product";

        // Find the product card
        const productCard = this.closest(
          ".corporate-product-card, " +
          ".electronics-product-card, " +
          ".kitchen-product-card, " +
          ".catalogue-card"
        );

        // Automatically get product name from H3
        if (productCard) {

          const productTitle =
            productCard.querySelector("h3");

          if (productTitle) {
            productName =
              productTitle.textContent.trim();
          }

        }

        // WhatsApp message
        const message =
          `Hi Giftory, I want to enquire about ${productName}. Please share the pricing and details.`;

        // Create WhatsApp link
        const whatsappURL =
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");

      });

    }

  });

});