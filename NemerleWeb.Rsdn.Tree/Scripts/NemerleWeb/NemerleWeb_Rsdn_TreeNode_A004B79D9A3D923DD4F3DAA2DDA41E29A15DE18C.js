
  var NemerleWeb_Rsdn_TreeNode$ctor = {};
  NemerleWeb_Rsdn_TreeNode$ctor[""] = function() {}
  function NemerleWeb_Rsdn_TreeNode() {
    var _nw_self = this;
    _nw_self.get_IconUrl = _nw_self.get_IconUrl$$= function() {
      var _nw_self = this;
      var _nw_returnValue;
      var suffix_19121;
      if(({0: _nw_self.get_IsOpened(), 1: _nw_self.get_HasChildren()}[0] === false)) { 
        if({0: _nw_self.get_IsOpened(), 1: _nw_self.get_HasChildren()}[1]) { 
          suffix_19121 = "c.gif"
        } else {
          suffix_19121 = "s.gif"
        }
      } else {
        suffix_19121 = "o.gif"
      };
      _nw_returnValue = "http://rsdn.ru/images/tree/".concat(_nw_self.get_Icon()).toString().concat(suffix_19121);
      return _nw_returnValue
    };

    _nw_self.get_Href = _nw_self.get_Href$$= function() {
      var _nw_self = this;
      var _nw_returnValue;
      var _N_T_temp_var_28;
      var _N_T_temp_var_27 = (_nw_self._href === null);
      if((_N_T_temp_var_27 || (typeof _nw_self._href === "undefined"))) { 
        _N_T_temp_var_28 = true
      } else {
        _N_T_temp_var_28 = (_nw_self._href.indexOf("http://www.rsdn.ru") === 0)
      };
      if((_N_T_temp_var_28 === true)) { 
        _nw_returnValue = _nw_self._href
      } else {
        _nw_returnValue = "http://www.rsdn.ru".concat(_nw_self._href)
      };
      return _nw_returnValue
    };
    _nw_self.set_Href = _nw_self.set_Href$$= function(value) {
      var _nw_self = this;
      _nw_self._href = value
    };

    _nw_self.get_IsSelected = _nw_self.get_IsSelected$$= function() {
      var _nw_self = this;
      return _nw_self._N_IsSelected_8435
    };
    _nw_self.set_IsSelected = _nw_self.set_IsSelected$$= function(value) {
      var _nw_self = this;
      _nw_self._N_IsSelected_8435 = value
    };

    _nw_self.get_IsLoading = _nw_self.get_IsLoading$$= function() {
      var _nw_self = this;
      return _nw_self._N_IsLoading_8428
    };
    _nw_self.set_IsLoading = _nw_self.set_IsLoading$$= function(value) {
      var _nw_self = this;
      _nw_self._N_IsLoading_8428 = value
    };

    _nw_self.get_Parent = _nw_self.get_Parent$$= function() {
      var _nw_self = this;
      return _nw_self._N_Parent_8421
    };
    _nw_self.set_Parent = _nw_self.set_Parent$$= function(value) {
      var _nw_self = this;
      _nw_self._N_Parent_8421 = value
    };

    _nw_self.get_HasChildren = _nw_self.get_HasChildren$$= function() {
      var _nw_self = this;
      return _nw_self._N_HasChildren_8414
    };
    _nw_self.set_HasChildren = _nw_self.set_HasChildren$$= function(value) {
      var _nw_self = this;
      _nw_self._N_HasChildren_8414 = value
    };

    _nw_self.get_Children = _nw_self.get_Children$$= function() {
      var _nw_self = this;
      return _nw_self._N_Children_8407
    };
    _nw_self.set_Children = _nw_self.set_Children$$= function(value) {
      var _nw_self = this;
      _nw_self._N_Children_8407 = value
    };

    _nw_self.get_IsOpened = _nw_self.get_IsOpened$$= function() {
      var _nw_self = this;
      return _nw_self._N_IsOpened_8400
    };
    _nw_self.set_IsOpened = _nw_self.set_IsOpened$$= function(value) {
      var _nw_self = this;
      _nw_self._N_IsOpened_8400 = value
    };

    _nw_self.get_Depth = _nw_self.get_Depth$$= function() {
      var _nw_self = this;
      return _nw_self._N_Depth_8393
    };
    _nw_self.set_Depth = _nw_self.set_Depth$$= function(value) {
      var _nw_self = this;
      _nw_self._N_Depth_8393 = value
    };

    _nw_self.get_Hide = _nw_self.get_Hide$$= function() {
      var _nw_self = this;
      return _nw_self._N_Hide_8386
    };
    _nw_self.set_Hide = _nw_self.set_Hide$$= function(value) {
      var _nw_self = this;
      _nw_self._N_Hide_8386 = value
    };

    _nw_self.get_Icon = _nw_self.get_Icon$$= function() {
      var _nw_self = this;
      return _nw_self._N_Icon_8379
    };
    _nw_self.set_Icon = _nw_self.set_Icon$$= function(value) {
      var _nw_self = this;
      _nw_self._N_Icon_8379 = value
    };

    _nw_self.get_Caption = _nw_self.get_Caption$$= function() {
      var _nw_self = this;
      return _nw_self._N_Caption_8372
    };
    _nw_self.set_Caption = _nw_self.set_Caption$$= function(value) {
      var _nw_self = this;
      _nw_self._N_Caption_8372 = value
    };

    _nw_self.get_Id = _nw_self.get_Id$$= function() {
      var _nw_self = this;
      return _nw_self._N_Id_8365
    };
    _nw_self.set_Id = _nw_self.set_Id$$= function(value) {
      var _nw_self = this;
      _nw_self._N_Id_8365 = value
    };

    _nw_self.TogglePin = {};
    _nw_self.TogglePin$$ = {};
    _nw_self.TogglePin[""] = _nw_self.TogglePin$$[""] = function() {
      
      if(!(NemerleWeb_Rsdn_MainPage.Instance.get_Pinned().IsPinned["NemerleWeb.Rsdn.TreeNode"].call(NemerleWeb_Rsdn_MainPage.Instance.get_Pinned(), _nw_self))) { 
        NemerleWeb_Rsdn_MainPage.Instance.get_Pinned().AddPinned["System.String"].call(NemerleWeb_Rsdn_MainPage.Instance.get_Pinned(), _nw_self.get_Id())
      } else {
        NemerleWeb_Rsdn_MainPage.Instance.get_Pinned().RemovePinned["System.String"].call(NemerleWeb_Rsdn_MainPage.Instance.get_Pinned(), _nw_self.get_Id())
      }
    }
    _nw_self.CaptionClick = {};
    _nw_self.CaptionClick$$ = {};
    _nw_self.CaptionClick[""] = _nw_self.CaptionClick$$[""] = function() {
      
      if(_nw_self.get_HasChildren()) { 
        var _N_T_temp_var_29 = (_nw_self.get_Children() === null);
        if((_N_T_temp_var_29 || (typeof _nw_self.get_Children() === "undefined"))) { 
          _nw_self.set_IsLoading(true);
          _nw_self.set_IsOpened(!(_nw_self.get_IsOpened()));
          var _N_wildcard_3547_19166 = $.ajax({
  url: '/TreeNode/LoadNodeChildren',
  type: 'POST',
  dataType: 'json',
  data: { model: '{id: ' + JSON.stringify(nweb.utils.normalizeObjectForServer(_nw_self.get_Id())) + '}' },
  success: function(result) {
    var typed = nweb.utils.toTypedObject(result);
    var callback = function (children) {   _nw_self.set_Children(children);
  var enumerator_19158 = _nw_self.get_Children().getEnumerator();
  var loop_19161 = function () {   if(enumerator_19158.moveNext()) { 
    child_19163 = enumerator_19158.current();
    child_19163.set_Parent(_nw_self);
    loop_19161()
  } else {

  } };

  try {
    loop_19161()
  } finally {
    if((enumerator_19158.dispose && (typeof enumerator_19158.dispose === "function"))) { 
      enumerator_19158.dispose()
    } else {
      enumerator_19158.Dispose[""]()
    }
  }
;
  _nw_self.set_IsLoading(false) };
    if(result != null && nweb.utils.isTuple(result))
      callback.apply(undefined, typed);
    else
      callback(typed);

    nweb.invalidate();
  }
})
        } else {
          _nw_self.set_IsOpened(!(_nw_self.get_IsOpened()))
        }
      } else {
        if(window.event.ctrlKey) { 
          var _N_wildcard_3547_19710 = window.open(_nw_self.get_Href(), "_blank", null, false)
        } else {
          NemerleWeb_Rsdn_MainPage.Instance.SelectNode["NemerleWeb.Rsdn.TreeNode"].call(NemerleWeb_Rsdn_MainPage.Instance, _nw_self)
        }
      }
    }
    _nw_self.IsPinnedNode = {};
    _nw_self.IsPinnedNode$$ = {};
    _nw_self.IsPinnedNode["NemerleWeb.Rsdn.TreeNode"] = _nw_self.IsPinnedNode$$["NemerleWeb.Rsdn.TreeNode"] = function(node) {
      
      return NemerleWeb_Rsdn_MainPage.Instance.get_Pinned().IsPinned["NemerleWeb.Rsdn.TreeNode"].call(NemerleWeb_Rsdn_MainPage.Instance.get_Pinned(), node)
    }
    _nw_self.IsPinnedNode[""] = _nw_self.IsPinnedNode["NemerleWeb.Rsdn.TreeNode"]
    _nw_self._href = null;
    _nw_self._N_IsSelected_8435 = false;
    _nw_self._N_IsLoading_8428 = false;
    _nw_self._N_Parent_8421 = null;
    _nw_self._N_HasChildren_8414 = false;
    _nw_self._N_Children_8407 = null;
    _nw_self._N_IsOpened_8400 = false;
    _nw_self._N_Depth_8393 = 0;
    _nw_self._N_Hide_8386 = false;
    _nw_self._N_Icon_8379 = null;
    _nw_self._N_Caption_8372 = null;
    _nw_self._N_Id_8365 = null
    NemerleWeb_Rsdn_TreeNode$ctor[arguments[0]].apply(this, Array.prototype.slice.call(arguments, 1))
    _nw_self.get_IconUrl = _nw_self.get_IconUrl$$;

    _nw_self.get_Href = _nw_self.get_Href$$;
    _nw_self.set_Href = _nw_self.set_Href$$;

    _nw_self.get_IsSelected = _nw_self.get_IsSelected$$;
    _nw_self.set_IsSelected = _nw_self.set_IsSelected$$;

    _nw_self.get_IsLoading = _nw_self.get_IsLoading$$;
    _nw_self.set_IsLoading = _nw_self.set_IsLoading$$;

    _nw_self.get_Parent = _nw_self.get_Parent$$;
    _nw_self.set_Parent = _nw_self.set_Parent$$;

    _nw_self.get_HasChildren = _nw_self.get_HasChildren$$;
    _nw_self.set_HasChildren = _nw_self.set_HasChildren$$;

    _nw_self.get_Children = _nw_self.get_Children$$;
    _nw_self.set_Children = _nw_self.set_Children$$;

    _nw_self.get_IsOpened = _nw_self.get_IsOpened$$;
    _nw_self.set_IsOpened = _nw_self.set_IsOpened$$;

    _nw_self.get_Depth = _nw_self.get_Depth$$;
    _nw_self.set_Depth = _nw_self.set_Depth$$;

    _nw_self.get_Hide = _nw_self.get_Hide$$;
    _nw_self.set_Hide = _nw_self.set_Hide$$;

    _nw_self.get_Icon = _nw_self.get_Icon$$;
    _nw_self.set_Icon = _nw_self.set_Icon$$;

    _nw_self.get_Caption = _nw_self.get_Caption$$;
    _nw_self.set_Caption = _nw_self.set_Caption$$;

    _nw_self.get_Id = _nw_self.get_Id$$;
    _nw_self.set_Id = _nw_self.set_Id$$;

    _nw_self.TogglePin[""] = _nw_self.TogglePin$$[""];
    _nw_self.CaptionClick[""] = _nw_self.CaptionClick$$[""];
    _nw_self.IsPinnedNode["NemerleWeb.Rsdn.TreeNode"] = _nw_self.IsPinnedNode$$["NemerleWeb.Rsdn.TreeNode"];
    _nw_self.IsPinnedNode[""] = _nw_self.IsPinnedNode["NemerleWeb.Rsdn.TreeNode"]
///SignalR///
    _nw_self.__nweb_meta = {
      properties: [{ name: "IconUrl", attrs: [''], ValueType: false },{ name: "Href", attrs: [''], ValueType: false },{ name: "IsSelected", attrs: [''], ValueType: true },{ name: "IsLoading", attrs: [''], ValueType: true },{ name: "Parent", attrs: [''], ValueType: false },{ name: "HasChildren", attrs: [''], ValueType: true },{ name: "Children", attrs: [''], ValueType: false },{ name: "IsOpened", attrs: [''], ValueType: true },{ name: "Depth", attrs: [''], ValueType: true },{ name: "Hide", attrs: [''], ValueType: true },{ name: "Icon", attrs: [''], ValueType: false },{ name: "Caption", attrs: [''], ValueType: false },{ name: "Id", attrs: [''], ValueType: false }],
      fields:     [{ name: "_href", attrs: [''], ValueType: false },{ name: "_N_IsSelected_8435", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: true },{ name: "_N_IsLoading_8428", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: true },{ name: "_N_Parent_8421", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: false },{ name: "_N_HasChildren_8414", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: true },{ name: "_N_Children_8407", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: false },{ name: "_N_IsOpened_8400", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: true },{ name: "_N_Depth_8393", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: true },{ name: "_N_Hide_8386", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: true },{ name: "_N_Icon_8379", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: false },{ name: "_N_Caption_8372", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: false },{ name: "_N_Id_8365", attrs: ['System.Diagnostics.DebuggerBrowsable(System.Diagnostics.DebuggerBrowsableState.Never)','System.Runtime.CompilerServices.CompilerGenerated'], ValueType: false }],
      methods:    []
    };

  }





