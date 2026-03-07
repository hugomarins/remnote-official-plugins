import {
	declareIndexPlugin,
	ReactRNPlugin,
	SelectionType,
} from "@remnote/plugin-sdk";
import "../style.css";

const CSS = `
/* General Hidden Styles */
.rn-queue__content--answer-hidden [data-queue-rem-container-tags~="hide-in-queue"]:not(.rn-question-rem) > .RichTextViewer,
.rn-queue__content--answer-hidden [data-queue-rem-container-tags~="hide-in-queue"]:not(.rn-question-rem) > .rn-flashcard-delimiter,
.rn-queue__content--answer-hidden [data-queue-rem-container-tags~="hide-in-queue"]:not(.rn-question-rem) > .rn-queue-rem > .RichTextViewer,
.rn-queue__content--answer-hidden [data-queue-rem-container-tags~="hide-in-queue"]:not(.rn-question-rem) > .rem-bullet__document {
  display: none;
}

/* Hidden in Queue Text */
.rn-queue__content--answer-hidden [data-queue-rem-container-tags~="hide-in-queue"]:not(.rn-question-rem) > .rn-queue-rem > .rn-bullet-container,
.rn-queue__content--answer-hidden [data-queue-rem-container-tags~="hide-in-queue"]:not(.rn-question-rem) > .rn-queue-rem > .rem-bullet__document {
  position: relative;
}

.rn-queue__content--answer-hidden [data-queue-rem-container-tags~="hide-in-queue"]:not(.rn-question-rem) > .rn-queue-rem > .rn-bullet-container:after,
.rn-queue__content--answer-hidden [data-queue-rem-container-tags~="hide-in-queue"]:not(.rn-question-rem) > .rn-queue-rem > .rem-bullet__document:after {
  content: "Hidden in queue";
  opacity: .3;
  white-space: nowrap;
  position: absolute;
  left: 25px;
  top: 0;
}

/* Remove from Queue Styles */
.rn-queue__content [data-queue-rem-container-tags~="remove-from-queue"]:not(.rn-question-rem) > .rn-queue-rem {
  display: none;
}

.rn-queue__content [data-queue-rem-container-tags~="remove-from-queue"]:not(.rn-question-rem),
.rn-breadcrumb-item[data-rem-tags~="remove-from-queue"] {
	margin-left: 0px !important; // makes it look like its not indented to the removed parent
}

/* No Hierarchy Styles */
.rn-queue__content:has(.rn-question-rem[data-queue-rem-container-tags~="no-hierarchy"]) .indented-rem:not(.rn-question-rem) {
  margin-left: 0px !important;
}

.rn-queue__content:has(.rn-question-rem[data-queue-rem-container-tags~="no-hierarchy"]) .indented-rem:not(.rn-question-rem) > .rn-queue-rem,
.rn-queue__content:has(.rn-question-rem[data-queue-rem-container-tags~="no-hierarchy"]) .indented-rem:not(.rn-question-rem) > .rn-flashcard-delimiter,
.rn-queue__content:has(.rn-question-rem[data-queue-rem-container-tags~="no-hierarchy"]) .indented-rem:not(.rn-question-rem) > .RichTextViewer {
  display: none;
}

/* Hide Parent Styles */
.rn-queue__content--answer-hidden .indented-rem:has(> .rn-question-rem[data-queue-rem-container-tags~="hide-parent"]) > .RichTextViewer,
.rn-queue__content--answer-hidden .indented-rem:has(> .rn-question-rem[data-queue-rem-container-tags~="hide-parent"]) > .rn-flashcard-delimiter,
.rn-queue__content--answer-hidden .indented-rem:has(> .rn-question-rem[data-queue-rem-container-tags~="hide-parent"]) > .rn-queue-rem > .RichTextViewer,
.rn-queue__content--answer-hidden .indented-rem:has(> .rn-question-rem[data-queue-rem-container-tags~="hide-parent"]) > .rem-bullet__document {
  display: none !important;
}

.rn-queue__content--answer-hidden .indented-rem:has(> .rn-question-rem[data-queue-rem-container-tags~="hide-parent"]) > .rn-queue-rem > .rn-bullet-container,
.rn-queue__content--answer-hidden .indented-rem:has(> .rn-question-rem[data-queue-rem-container-tags~="hide-parent"]) > .rn-queue-rem > .rem-bullet__document {
  position: relative;
}

.rn-queue__content--answer-hidden .indented-rem:has(> .rn-question-rem[data-queue-rem-container-tags~="hide-parent"]) > .rn-queue-rem > .rn-bullet-container:after,
.rn-queue__content--answer-hidden .indented-rem:has(> .rn-question-rem[data-queue-rem-container-tags~="hide-parent"]) > .rn-queue-rem > .rem-bullet__document:after {
  content: "Hidden in queue";
  opacity: .3;
  white-space: nowrap;
  position: absolute;
  left: 25px;
  top: 0;
}

/* Hide GrandParent Styles */
.rn-queue__content--answer-hidden .indented-rem:has(> .indented-rem > .rn-question-rem[data-queue-rem-container-tags~="hide-grandparent"]) > .RichTextViewer,
.rn-queue__content--answer-hidden .indented-rem:has(> .indented-rem > .rn-question-rem[data-queue-rem-container-tags~="hide-grandparent"]) > .rn-flashcard-delimiter,
.rn-queue__content--answer-hidden .indented-rem:has(> .indented-rem > .rn-question-rem[data-queue-rem-container-tags~="hide-grandparent"]) > .rn-queue-rem > .RichTextViewer,
.rn-queue__content--answer-hidden .indented-rem:has(> .indented-rem > .rn-question-rem[data-queue-rem-container-tags~="hide-grandparent"]) > .rem-bullet__document {
  display: none !important;
}

.rn-queue__content--answer-hidden .indented-rem:has(> .indented-rem > .rn-question-rem[data-queue-rem-container-tags~="hide-grandparent"]) > .rn-queue-rem > .rn-bullet-container,
.rn-queue__content--answer-hidden .indented-rem:has(> .indented-rem > .rn-question-rem[data-queue-rem-container-tags~="hide-grandparent"]) > .rn-queue-rem > .rem-bullet__document {
  position: relative;
}

.rn-queue__content--answer-hidden .indented-rem:has(> .indented-rem > .rn-question-rem[data-queue-rem-container-tags~="hide-grandparent"]) > .rn-queue-rem > .rn-bullet-container:after,
.rn-queue__content--answer-hidden .indented-rem:has(> .indented-rem > .rn-question-rem[data-queue-rem-container-tags~="hide-grandparent"]) > .rn-queue-rem > .rem-bullet__document:after {
  content: "Hidden in queue";
  opacity: .3;
  white-space: nowrap;
  position: absolute;
  left: 25px;
  top: 0;
}

`;

const HIDE_IN_QUEUE_POWERUP_CODE = "hideInQueue";
const REMOVE_FROM_QUEUE_POWERUP_CODE = "removeFromQueue";
const NO_HIERARCHY_POWERUP_CODE = "noHierarchy";
const HIDE_PARENT_POWERUP_CODE = "hideParent";
const HIDE_GRANDPARENT_POWERUP_CODE = "hideGrandparent";

async function onActivate(plugin: ReactRNPlugin) {
	await plugin.app.registerPowerup({
		name: "No Hierarchy",
		code: NO_HIERARCHY_POWERUP_CODE,
		description:
			"Removes the ancestor hierarchy of the tagged Rem in the queue view.",
		options: {
			slots: [],
		},
	});

	const runAddPowerupCommand = async (powerup: string) => {
		const url = await plugin.window.getURL();
		if (url.includes("/flashcards")) {
			const currentQueueItem = await plugin.queue.getCurrentCard();
			if (currentQueueItem?.remId) {
				const rem = await plugin.rem.findOne(currentQueueItem.remId);
				await rem?.addPowerup(powerup);
				await plugin.app.toast("Powerup added (will take effect next time you see this card).");
			} else {
				await plugin.app.toast("Could not find a Rem to add powerup for.");
			}
			return;
		}

		const sel = await plugin.editor.getSelection();
		const selType = sel?.type;
		if (!selType) {
			return;
		}
		if (selType === SelectionType.Rem) {
			const rems = (await plugin.rem.findMany(sel.remIds)) || [];
			rems.forEach((r) => r.addPowerup(powerup));
		} else {
			const rem = await plugin.rem.findOne(sel.remId);
			rem?.addPowerup(powerup);
		}
	};

	await plugin.app.registerCommand({
		id: `${NO_HIERARCHY_POWERUP_CODE}Cmd`,
		name: "No Hierarchy",
		description: `Any ancestors will be hidden on the front and back of the flashcard.`,
		quickCode: "nh",
		action: async () => {
			await runAddPowerupCommand(NO_HIERARCHY_POWERUP_CODE);
		},
	});

	await plugin.app.registerPowerup({
		name: "Hide in Queue",
		code: HIDE_IN_QUEUE_POWERUP_CODE,
		description: "Hides the tagged Rem in the queue view.",
		options: {
			slots: [],
		},
	});

	await plugin.app.registerCommand({
		id: `${HIDE_IN_QUEUE_POWERUP_CODE}Cmd`,
		name: "Hide in Queue",
		description: `Hide the tagged Rem in the queue, displaying only “Hidden in Queue."`,
		quickCode: "hiq",
		action: async () => {
			await runAddPowerupCommand(HIDE_IN_QUEUE_POWERUP_CODE);
		},
	});

	await plugin.app.registerPowerup({
		name: "Remove from Queue",
		code: REMOVE_FROM_QUEUE_POWERUP_CODE,
		description: "Removes the tagged Rem in the queue view.",
		options: {
			slots: [],
		},
	});

	await plugin.app.registerCommand({
		id: `${REMOVE_FROM_QUEUE_POWERUP_CODE}Cmd`,
		name: "Remove from Queue",
		description: `Completely remove the tagged Rem from the queue view.`,
		quickCode: "rfq",
		action: async () => {
			await runAddPowerupCommand(REMOVE_FROM_QUEUE_POWERUP_CODE);
		},
	});

	await plugin.app.registerPowerup({
		name: "Hide Parent",
		code: HIDE_PARENT_POWERUP_CODE,
		description: "Hides the immediate parent in the queue view.",
		options: {
			slots: [],
		},
	});

	await plugin.app.registerCommand({
		id: `${HIDE_PARENT_POWERUP_CODE}Cmd`,
		name: "Hide Parent",
		description: `Hide the immediate parent of the tagged Rem in the queue.`,
		quickCode: "hp",
		action: async () => {
			await runAddPowerupCommand(HIDE_PARENT_POWERUP_CODE);
		},
	});

	await plugin.app.registerPowerup({
		name: "Hide Grandparent",
		code: HIDE_GRANDPARENT_POWERUP_CODE,
		description: "Hides the grandparent in the queue view.",
		options: {
			slots: [],
		},
	});

	await plugin.app.registerCommand({
		id: `${HIDE_GRANDPARENT_POWERUP_CODE}Cmd`,
		name: "Hide Grandparent",
		description: `Hide the grandparent of the tagged Rem in the queue.`,
		quickCode: "hgp",
		action: async () => {
			await runAddPowerupCommand(HIDE_GRANDPARENT_POWERUP_CODE);
		},
	});

	await plugin.app.registerCSS("powerup", CSS);
}

async function onDeactivate(_: ReactRNPlugin) { }

declareIndexPlugin(onActivate, onDeactivate);
