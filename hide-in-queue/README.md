## Features

- Provides a **"Hide in Queue"** powerup that hides the tagged Rem in the queue.
- Provides a **"Remove from Queue"** powerup which removes the tagged Rem from the hierarchy in the queue.
- Provides a **"No Hierarchy"** powerup which hides any ancestors on the front and back of the flashcard.
- 🆕 Provides a **"Hide Parent"** powerup which hides the immediate parent on the front of the flashcard.
- 🆕 Provides a **"Hide Grandparent"** powerup which hides the grandparent on the front of the flashcard.
- 🆕 **Queue Support:** All plugin commands can be triggered directly while reviewing a flashcard in the Queue without needing to switch to the Editor.
  * **No Hierarchy, Hide Parent, and Hide Grandparent:** Automatically apply the powerup directly to the current card.
  * **Hide in Queue and Remove from Queue:** Since these are designed to be applied to parent/ancestor Rems rather than the flashcard itself, triggering them will open a prompt. You can choose to apply the intended powerup to the card's parent Rem.

## How to Use

### Hide In Queue

Tag any Rem with "Hide in Queue" (using the command). Its content will be replaced in the front of descendant flashcards with "Hidden in Queue":

* The content of the tagged Rem is hidden, but _the bullet point itself remains visible_.
* Instead of the text, a ghosted/faded label saying **"Hidden in queue"** appears next to the bullet.
* Visual result: The user still sees the structural indentation and knows that something is there, but the actual information is obscured during the question phase (front of flashcard)(good for hiding hints, spoilers or context that would make retrieving the answer trivial).

**Editor:**
![](https://i.imgur.com/06IHTFp.png)

**Queue:**
![](https://i.imgur.com/nntgSw1.png)

### Remove from Queue

Tag any Rem with "Remove from Queue" (using the command). Its content will be completely removed from the flashcard's visual hierarchy of its descendants.

* Not only is the text gone, but any child Rems underneath it are pulled to the left, essentially collapsing the space.
* _Visual result:_ It looks exactly as if that intermediate Rem never existed in your document hierarchy at all.

**Editor:**
<br/>
![](https://raw.githubusercontent.com/remnoteio/remnote-official-plugins/main/hide-in-queue/images/editor.png)

**Queue:**
<br/>
![](https://raw.githubusercontent.com/remnoteio/remnote-official-plugins/main/hide-in-queue/images/queue.png)


**Differences between "Hide in Queue" and "Remove from Queue"**:
- **Hide in Queue (`hiq`)**: The content is hidden, but the bullet point structure remains visible with a "Hidden in queue" ghosted label. Ideal when you want to acknowledge the structural presence of a parent but obscure its text.
- **Remove from Queue (`rfq`)**: The Rem is completely removed from the visual hierarchy (`display: none`), and any children it has are shifted left to fill its space. Ideal for completely erasing an intermediate parent level as if it never existed.

### No Hierarchy

Tag any Rem with "No Hierarchy" (using the command). Any ancestors will be hidden on the front and back of the flashcard.

**Editor:**
<br/>
![](https://raw.githubusercontent.com/remnoteio/remnote-official-plugins/main/hide-in-queue/images/no-hier-ed.png)

**Queue:**
<br/>
![](https://raw.githubusercontent.com/remnoteio/remnote-official-plugins/main/hide-in-queue/images/no-hier-queue.png)

### Hide Parent 🆕

Tag any Rem with "Hide Parent" (using the command `Hide Parent` or `/hp`). Its immediate parent will be hidden on the front of the flashcard, but revealed on the back. (Similar to **Hide in Queue**, but instead of tagging the parent Rem, the user tags the specific flashcard Rem, so that other flashcard descendants of the same parent Rem are not affected.)

**Editor:**
<br/>
![](https://raw.githubusercontent.com/remnoteio/remnote-official-plugins/main/hide-in-queue/images/hide-parent-editor.png)

**Queue:**
<br/>
![](https://raw.githubusercontent.com/remnoteio/remnote-official-plugins/main/hide-in-queue/images/hide-parent-queue-question.png)

![](https://raw.githubusercontent.com/remnoteio/remnote-official-plugins/main/hide-in-queue/images/hide-parent-queue-answer.png)


### Hide Grandparent 🆕

Tag any Rem with "Hide Grandparent" (using the command `Hide Grandparent` or `/hgp`). Its grandparent will be hidden on the front of the flashcard, but revealed on the back.

**Editor:**
<br/>
![](https://raw.githubusercontent.com/remnoteio/remnote-official-plugins/main/hide-in-queue/images/hide-grandparent-editor.png)

**Queue:**
<br/>
![](https://raw.githubusercontent.com/remnoteio/remnote-official-plugins/main/hide-in-queue/images/hide-grandparent-queue-question.png)

![](https://raw.githubusercontent.com/remnoteio/remnote-official-plugins/main/hide-in-queue/images/hide-grandparent-queue-answer.png)

## Developers

This plugin is an example plugin built by the RemNote team to demonstrate how to build plugins using the new plugin SDK. The source code has been extensively documented to explain the various API functions.

If you are interested in building your own plugins, taking a look through the source code for this plugin (as well as the other example plugins and plugins built by the community) would be a great starting point. Of course, you should also check out the official documentation, guides and tutorials on our [plugin website](https://plugins.remnote.com/).

If you are new to writing plugins, we recommend checking out the [dictionary plugin project tutorial](https://plugins.remnote.com/in-depth-tutorial/overview).
