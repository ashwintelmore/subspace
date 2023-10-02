const axiosIntance = require("../utilies/helper/axios");
const { errorMassge, resMessage } = require("../utilies/constant");
const _ = require("lodash");

exports.blogStat = async (req, res, next) => {
  let word = "privacy";

  await axiosIntance
    .get("/blogs")
    .then((response) => {
      const blogs = response.data.blogs;

      let result = {
        totalBlogs: 0,
        longestBlogTitle: {},
        totalBlogsContainWord: 0,
        uniqueBlogs: [],
      };

      if (blogs.length > 0)
        result = {
          totalBlogs: _.size(blogs),
          longestBlogTitle: _.maxBy(blogs, (each) => each.title.length),
          totalBlogsContainWord: _.size(
            _.filter(blogs, (blog) =>
              _.includes(_.toLower(blog.title), _.toLower(word))
            )
          ),
          uniqueBlogs: _.uniqBy(blogs, (each) => _.toLower(each.title)),
        };

      return res.status(200).json({
        massage: resMessage.FETCH_SUCCESS,
        payload: result,
      });
    })
    .catch((err) => {
      return res
        .status(err.code || errorMassge["500"].code)
        .json((err.code && err) || errorMassge["500"]);
    });
};
exports.blogSearch = async (req, res, next) => {
  const { query } = req.query;
  console.log('query', query)

  if(!query)
  return res.status(200).json({
    massage: resMessage.FIELD_REQUIRED,
    payload: [],
  });

  await axiosIntance
    .get("/blogs")
    .then((response) => {
      const blogs = response.data.blogs;

      const result = _.filter(blogs, (each) =>
        _.toLower(each.title).includes(_.toLower(query))
      );

      if (result.length == 0)
        return res.status(200).json({
          massage: resMessage.DATA_NOT_FOUND,
          payload: result,
        });

      return res.status(200).json({
        massage: resMessage.FETCH_SUCCESS,
        payload: result,
      });
    })
    .catch((err) => {
      return res
        .status(err.code || errorMassge["500"].code)
        .json((err.code && err) || errorMassge["500"]);
    });
};
