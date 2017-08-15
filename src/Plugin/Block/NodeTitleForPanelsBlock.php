<?php

namespace Drupal\stanford_layouts\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a block for page titles on nodes.
 *
 * @Block(
 *   id = "stanford_layouts_node_title",
 *   admin_label = @Translation("Node Title for Panels"),
 *   category = @Translation("Panels"),
 * )
 */
class NodeTitleForPanelsBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {
    $node = \Drupal::routeMatch()->getParameter('node');
    if (is_object($node)) {
      return array(
        '#markup' => "<h1 id=\"page-title\" class=\"page-title\">" . $node->getTitle() . "</h1>",
      );
    }
  }

}
