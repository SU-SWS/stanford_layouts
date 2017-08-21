<?php

namespace Drupal\stanford_layouts\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Routing\RouteMatchInterface;

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
   * The currently active route match object.
   *
   * @var \Drupal\Core\Routing\RouteMatchInterface
   */
  private $routeMatch;

  /**
   * {@inheritdoc}
   */
  public function build() {
    $node = $this->routeMatch()->getParameter('node');
    if (is_object($node)) {
      return [
        '#markup' => "<h1 id=\"page-title\" class=\"page-title\">" . $node->getTitle() . "</h1>",
      ];
    }
  }

  /**
   * Wraps the routeMatch service.
   *
   * @return \Drupal\Core\Routing\RouteMatchInterface
   *   The routeMatch service object.
   */
  protected function routeMatch() {
    if (!$this->routeMatch) {
      $this->routeMatch = \Drupal::routeMatch();
    }
    return $this->routeMatch;
  }

  /**
   * Sets the RouteMatch service.
   *
   * @param \Drupal\Core\Routing\RouteMatchInterface $route_match
   *   The routeMatch service.
   */
  public function setRouteMatch(RouteMatchInterface $route_match) {
    $this->routeMatch = $route_match;
  }

}
