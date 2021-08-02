import { NextApiRequest, NextApiResponse } from 'next';
import catchErrorsFrom from '../middleware/catchErrorsFrom';
import Review, { IReview } from '../models/review';
import ErrorHandler from '../utils/errorHandler';

export { createNewReview, getAllProductReviews };

/**
 * Create new review
 * @POST /api/reviews
 * @function createNewReview
 * @param {NextApiRequest} req  Next API request
 * @param {Next.Response} res  Next API response
 * @return {undefined}
 */
const createNewReview = catchErrorsFrom(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { productID, clientName, clientEmail, title, reviewContent, rating } =
      req.body;

    const newReview: IReview = await Review.create({
      product: productID,
      productID,
      clientName,
      clientEmail,
      title,
      reviewContent,
      rating,
    });

    res.status(200).json({
      success: true,
      newReview,
    });
  }
);

/**
 * Get all Product Reviews
 * @GET /api/reviews/:productID
 * @function getAllProductReviews
 * @param {NextApiRequest} req  Next API request
 * @param {Next.Response} res  Next API response
 * @return {undefined}
 */
const getAllProductReviews = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<ErrorHandler | undefined> => {
  const allProductReviews = await Review.find({ product: req.query.id });

  if (!allProductReviews) {
    return new ErrorHandler(
      `Product Reviews with the id ${req.query.id} does not exist`,
      404
    );
  }

  res.status(200).json({
    success: true,
    reviewCount: allProductReviews.length,
    reviews: allProductReviews,
  });
};