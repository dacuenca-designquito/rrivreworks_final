<?php
/**
 * @file views-view-list.tpl.php
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */
?>
<?php print $wrapper_prefix; ?>
<?php if (!empty($title)) : ?>
    <h3><?php print $title; ?></h3>
<?php endif; ?>
<?php print $list_type_prefix; ?>
<?php
$nid = 0;
$print = '';
for ($i = 0; $i < sizeof($rows); $i++) {
    $print.= $rows[$i];
    if ($i % 2 != 0) {
        print '<li class="';
        print $classes_array[$nid];
        print '">';
        print $print;
        print '</li>';
        $nid++;
        $print = '';
    } else if ($i == sizeof($rows)-1) {
        print '<li class="';
        print $classes_array[$nid];
        print '">';
        print $print;
        print '</li>';
        $nid++;
        $print = '';
    }
}
?>
<?php print $list_type_suffix; ?>
<?php print $wrapper_suffix; ?>
