import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export function BlogSection() {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      date: "01",
      title: "Kasd tempor diam sea justo dolor",
      excerpt:
        "Dolor sea ipsum ipsum et. Etat duo lorem magna vero dolor dolores. Rebum elmrod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna",
      author: "John Doe",
      category: "Web Design",
      image: "https://themewagon.github.io/faster/img/blog-1.jpg",
    },
    {
      id: 2,
      date: "01",
      title: "Kasd tempor diam sea justo dolor",
      excerpt:
        "Dolor sea ipsum ipsum et. Etat duo lorem magna vero dolor dolores. Rebum elmrod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna",
      author: "John Doe",
      category: "Web Design",
      image: "https://themewagon.github.io/faster/img/blog-2.jpg",
    },
  ];

  return (
    <>
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={("up", "spring", 0.1, 1)}
            className="text-center mb-12"
          >
            <p className="text-sm text-orange-600 font-semibold dark:text-orange-400">
              {t("blog1.section_title")}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
              {t("blog1.heading")}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={("up", "spring", index * 0.2, 1)}
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <CardHeader className="relative p-0 overflow-hidden">
                    <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded z-10">
                      {post.date}
                    </div>
                    <div className="h-64 w-full overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.category}</span>
                    </div>
                    <CardTitle className="text-xl font-bold mb-2 dark:text-white">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <motion.div whileHover={{ x: 5 }}>
                      <Button
                        variant="link"
                        className="p-0 text-orange-600 dark:text-orange-400 group"
                      >
                        <span className="mr-1">{t("blog1.read_more")}</span>
                        <span className="group-hover:translate-x-1 transition-transform">
                          &gt;
                        </span>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
