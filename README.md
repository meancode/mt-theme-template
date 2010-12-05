# MT-Theme-Template 0.2

**NOT READY FOR PRIME TIME YET**

The purpose here is twofold: 

* Facilitate the rapid development of themes starting from a rock solid foundation of best practices. No longer start from scratch when you need to create a new theme. Simply Fork this GitHub repository and start work with a ready-made skeleton. 
* Explain how simple it is to create, manage, and deploy a custom theme in Movable Type and Melody.

**This is not a functioning theme**, but a skeleton for creating a Movable Type or Melody theme. The included `config.yaml` is not only a boilerplate for creating a brand new theme, but also includes examples of what is possible with [ConfigAssistant](https://github.com/endevver/mt-plugin-configassistant) and [Theme Manager](https://github.com/endevver/mt-plugin-theme-manager).

## Movable Type Prerequisites

* Movable Type 4.1 or higher
* [Config Assistant](http://github.com/endevver/mt-plugin-configassistant)
* [Theme Manager](https://github.com/endevver/mt-plugin-theme-manager)

## Melody Prerequisites

* Melody 1.0.0 Beta 2 or higher [Download](https://github.com/openmelody/melody)
* ConfigAssistant and Theme Manager are both bundled with Melody

## Theme Foundation

This theme is based on two solid frameworks, [HTML 5 Boilerplate](https://github.com/paulirish/html5-boilerplate) and [960 Grid System](https://github.com/nathansmith/960-Grid-System). These have been enhanced using Theme Options in Movable Type/Melody. This theme is based on:

* HTML 5 Boilerplate _0.9.5_
* Modernizr _1.6_
* jQuery _1.4.2_
* 960 Grid System _last updated 11-18-2010_

## HTML 5 Boilerplate

If you are not familiar with working with HTML 5 Boilerplate, you should watch the [introductory video](http://html5boilerplate.com/) for a better understanding. It is outside the scope of this Theme to explain all of the options. It is advised to make changes to the .mtml templates to suit your needs before deploying this theme.

## 960 Grid System

> The [960 Grid System](http://960.gs/) is an effort to streamline web development workflow by providing commonly used dimensions, based on a width of 960 pixels. There are two variants: 12 and 16 columns, which can be used separately or in tandem.

This grid system has been enhanced with a number of Theme Options for easier use inside of Movable Type or Melody. For example, you can easily change between the 12/24 and 16 column grid, without modifying the template code.

Not interested in using the 960 Grid System? Just delete all references from the .mtml templates before deploying this theme.

# Theme Template Usage

This section will explain what to modify before you get started building out your theme using this skeleton.

-   Replace &ldquo;Your Name&rdquo; in all files with _Your Name_ (use find/replace).
-   Replace &ldquo;MyTheme&rdquo; in all files with the name of your Theme (use find/replace).
-   Change name, author\_name, author\_link and description in `config.yaml`
-   Modify `default_prefs.yaml` using [this Melody documentation](https://github.com/openmelody/melody/wiki/designguide-prefbundles) as a guide.


# About Meancode Media, LLC

We provide web design and development, as well as hosting services. Specializing in Movable Type and blog/CMS design, our goal is to provide users with easy to manage web sites.

[http://www.meancode.com/](http://www.meancode.com/)

# Copyright

Copyright 2010, Meancode Media, LLC. All rights reserved.

# License

This plugin is licensed under the same terms as Perl itself.
