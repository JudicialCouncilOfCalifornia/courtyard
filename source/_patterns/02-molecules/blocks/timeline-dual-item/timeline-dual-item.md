Pattern API:

```bash
timeline_dual_item:
  # icon: 'both', 'up', or 'down'
  icon: "both"
  top:
    excerpt: "<div>html string</div>"
    deadline: "Deadline: 60 days after filing for divorce"
    # number: integer or 'wait'
    number: 1
    read_more:
      # "link" or "modal"
      type: "link"
      link:
        label: "Read more link"
        url: "#"
      modal:  "<div>html string</div>"
  bottom:
    excerpt: "<div>html string</div>"
    deadline: "Deadline: 60 days after filing for divorce"
      # number: integer or 'wait'
      number: 1
      read_more:
        # type: "link" or "modal"
        type: "link"
        link:
          label: "Read more link"
          url: "#"
        modal:  "<div>html string</div>"
```
