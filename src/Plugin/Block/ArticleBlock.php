<?php
/**
 * @file
 * Contains \Drupal\robotic\Plugin\Block\XaiBlock.
 */

namespace Drupal\robotic\Plugin\Block;

use Drupal\Core\Block\BlockBase;


/**
 * Provides a 'article' block.
 *
 * @Block(
 *   id = "article_block",
 *   admin_label = @Translation("Article block"),
 *   category = @Translation("Custom article block example")
 * )
 */
class ArticleBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    return array(
      '#type' => 'markup',
      '#markup' => 'This block list the article.',
    );
  }
}