'use strict';

describe('Blog.posts module', function() {

  beforeEach(module('Blog.posts'));

  describe('posts controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var postsCtrl = $controller('postsCtrl');
      expect(postsCtrl).toBeDefined();
    }));

  });
});