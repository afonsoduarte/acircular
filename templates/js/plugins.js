/* Plugins */

/*
    jQuery News Ticker is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, version 2 of the License.
 
    jQuery News Ticker is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with jQuery News Ticker.  If not, see <http://www.gnu.org/licenses/>.
*/
(function($){

  $.fn.gallery = function(options) {

    return this.each(function(){

      $container = $(this);

      $imageContainers = $container.find('.image');

      // Check if there's more than one image
      if( $imageContainers.length <= 1 ) return false;

      $container.append('<div class="counter"><span>1</span>/'+ $imageContainers.length +'</div>');

      $imageContainers.hide().first().show();

      $imageContainers.on('click', function(){
        $this = $(this);
        $this.hide();

        if($this.next('.image').length === 0){
          $this.siblings('.image').eq(0).show();
          $container.find('.counter span').text('1');
        } else {
          var current = parseInt( $container.find('.counter span').text() );
          $container.find('.counter span').text( current+1 );
          $this.next('.image').show();
        }

      });

    });

  };

})(jQuery);