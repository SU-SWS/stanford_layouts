<?php

namespace Drupal\stanford_layouts\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a block for page titles on nodes.
 *
 * @Block(
 *   id = "stanford_layouts_node_title",
 *   admin_label = @Translation("Node Title for Panels"),
 *   category = @Translation("Panels"),
 * )
 */
class NodeTitleForPanelsBlock extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * The currently active route match object.
   *
   * @var \Drupal\Core\Routing\RouteMatchInterface
   */
  private $routeMatch;

  public function __construct($configuration, $plugin_id, $plugin_definition, RouteMatchInterface $route_match) {
    $this->routeMatch = $route_match;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration, $plugin_id, $plugin_definition,
      $container->get('current_route_match')
    );
  }


  /**
   * {@inheritdoc}
   */
  public function build() {
    $node = $this->routeMatch->getParameter('node');
    if (is_object($node)) {
      return [
        '#markup' => "<h1 id=\"page-title\" class=\"page-title\">" . $node->getTitle() . "</h1>",
      ];
    }
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
