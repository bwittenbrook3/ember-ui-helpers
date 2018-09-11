import Service from '@ember/service';
import { get } from '@ember/object';
import RSVP from 'rsvp';

/* globals swal */
export default Service.extend({

  init() {
    this._super(...arguments)
    this.set('defaultMessageOptions', {
      timer: null,
      playSound: true,
      title: "Victory!"
    })
    this.set('notifySound', new Audio("/assets/sounds/errorNotification.mp3"))
  },

  info: function (message, { timer, playSound } = {}) {
    this.showMessage(message, "info", timer, playSound);
  },

  alert: function (message, { timer, playSound } = {}) {
    this.showMessage(message, "error", timer, playSound);
  },

  confirm: function (message, options = {}) {
    return new RSVP.Promise(resolve => {
      let swalOptions = {
        text: message,
        showCancelButton: true,
        closeOnConfirm: true,
      };

      let defaultOptions = {
        title: "Are you sure?",
        confirmButtonText: "Yes, I'm sure.",
        cancelButtonText: "Cancel"
      };
      Object.assign(swalOptions, defaultOptions, options);
      swal(swalOptions,
        function (isConfirm) {
          resolve(isConfirm);
        });
    });
  },

  stayOrGo: function (message, confirmButtonText, cancelButtonText, { title, timer, playSound } = {}) {
    return new RSVP.Promise(resolve => {
      if (timer === undefined) {
        timer = get(this, "defaultMessageOptions")
          .timer;
      }
      if (playSound === undefined) {
        playSound = get(this, "defaultMessageOptions")
          .playSound;
      }
      if (title === undefined) {
        title = get(this, "defaultMessageOptions")
          .title;
      }

      swal({
          title: title,
          text: message,
          type: "success",
          confirmButtonText: confirmButtonText,
          cancelButtonText: cancelButtonText,
          showCancelButton: true,
          timer: timer
        },
        function (isConfirm) {
          if (isConfirm == null) {
            swal.close();
            // isConfirm = true
          }
          resolve(isConfirm);
        });
      this.playSound(playSound);
    });
  },

  success: function (message, { timer, playSound } = {}) {
    this.showMessage(message, 'success', timer, playSound);
  },

  showMessage: function (message, messageType, timer, playSound) {
    if (timer === undefined) {
      timer = get(this, "defaultMessageOptions")
        .timer;
    }

    if (playSound === undefined) {
      playSound = get(this, "defaultMessageOptions")
        .playSound;
    }

    let swalOptions = { text: message, type: messageType, timer: timer };

    switch (messageType) {
    case "info":
      {
        swalOptions["title"] = "FYI";
        break;
      }
    case "success":
      {
        swalOptions["title"] = "Victory!";
        break;
      }
    case "error":
      {
        swalOptions["title"] = "Oops! Something went wrong!";
        break;
      }
    }
    swal(swalOptions);
    this.playSound(playSound);
  },

  playSound(playSound) {
    if (playSound) {
      let notifySound = this.get("notifySound");
      notifySound.play();
    }
  }

});