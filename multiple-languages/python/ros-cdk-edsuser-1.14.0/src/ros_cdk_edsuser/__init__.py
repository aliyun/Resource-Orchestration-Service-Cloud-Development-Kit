'''
## Aliyun ROS EDSUSER Construct Library

This module is part of the AliCloud ROS Cloud Development Kit (ROS CDK) project.

```python
import * as EDSUSER from '@alicloud/ros-cdk-edsuser';
```
'''
import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from ._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.interface(jsii_type="@alicloud/ros-cdk-edsuser.IUser")
class IUser(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``User``.'''

    @builtins.property
    @jsii.member(jsii_name="attrEndUserId")
    def attr_end_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndUserId: The name of the end user.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserProps":
        ...


class _IUserProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``User``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-edsuser.IUser"

    @builtins.property
    @jsii.member(jsii_name="attrEndUserId")
    def attr_end_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndUserId: The name of the end user.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndUserId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserProps":
        return typing.cast("UserProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IUser).__jsii_proxy_class__ = lambda : _IUserProxy


class RosUser(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edsuser.RosUser",
):
    '''This class is a base encapsulation around the ROS resource type ``ALIYUN::EdsUser::User``, which is used to create a convenience user.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``User`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosUserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3c5a4c9720caf8825a704f956c98deaeef89e04f347a9fc844ec2da1a3a06ca1)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__4511f7ff4ff1bc2348cbc0c47721a118b1ff5aa8fba557233bd78018019c9822)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrEndUserId")
    def attr_end_user_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: EndUserId: The name of the end user.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrEndUserId"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__be1e52696727bb9ce7e5883686a3011ace689cae40965072b5f3e71ddc12293a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="endUserId")
    def end_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endUserId: The name of the end user. The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "endUserId"))

    @end_user_id.setter
    def end_user_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f4299a7632d0bd250deafe656ede74f85133e820463f0e72cf5e80c80c367b61)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "endUserId", value)

    @builtins.property
    @jsii.member(jsii_name="autoLockTime")
    def auto_lock_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoLockTime: The date when the account is automatically locked. Format: yyyy-MM-dd HH:mm:ss.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "autoLockTime"))

    @auto_lock_time.setter
    def auto_lock_time(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43695132d867fd9ca120967c31f062f0103d0d24a4a357fcb9f457700641e663)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "autoLockTime", value)

    @builtins.property
    @jsii.member(jsii_name="businessChannel")
    def business_channel(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: businessChannel: The channel.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "businessChannel"))

    @business_channel.setter
    def business_channel(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__43311d7cb648f20dc511d982ac8837db209261a276c5dc1af65118e921b78909)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "businessChannel", value)

    @builtins.property
    @jsii.member(jsii_name="email")
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: email: The email address of the end user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "email"))

    @email.setter
    def email(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80dc9fa147e4e3843e032e8a27c32cd821efae3e9231f3cf122a848811dbd902)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "email", value)

    @builtins.property
    @jsii.member(jsii_name="isLocalAdmin")
    def is_local_admin(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isLocalAdmin: Whether to set this convenient account as a local administrator.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "isLocalAdmin"))

    @is_local_admin.setter
    def is_local_admin(
        self,
        value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__474478db9e0810a5925af96c2656616153a30c593ccc720c6d4c1160f6041b05)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "isLocalAdmin", value)

    @builtins.property
    @jsii.member(jsii_name="orgId")
    def org_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: orgId: The organization to which the end user belongs.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "orgId"))

    @org_id.setter
    def org_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__80d878cac226b9a4653903b5421b8ecb3fa606f3b40636a327894165c2b06052)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "orgId", value)

    @builtins.property
    @jsii.member(jsii_name="ownerType")
    def owner_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ownerType: The type of the account ownership.
        Enumeration Value:
        CreateFromManager
        Normal
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "ownerType"))

    @owner_type.setter
    def owner_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c2b739c0a52b692478f690862bb57c24bb9ba05cd169f98a823f1f9ede6a5bcb)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "ownerType", value)

    @builtins.property
    @jsii.member(jsii_name="password")
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: The initial password. If this parameter is left empty, an email for password reset is sent to the specified email address.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "password"))

    @password.setter
    def password(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3b60542f1657c043a98226a0cd1e792b7ee96e02edd1d9c404fa7fcc79606c6b)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "password", value)

    @builtins.property
    @jsii.member(jsii_name="passwordExpireDays")
    def password_expire_days(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        passwordExpireDays: The default password is valid indefinitely. This parameter can be used to set a validity period of 30 to 365 days. When the password expires, the end user must change the password before logging in again.
        .. epigraph::

        This feature is currently in invitation-only testing. To try it, submit a ticket to enable it.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "passwordExpireDays"))

    @password_expire_days.setter
    def password_expire_days(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d691bff6398268970e103dffd698f7964d23dec8198d8a39bda55c9e62ea9bdf)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "passwordExpireDays", value)

    @builtins.property
    @jsii.member(jsii_name="phone")
    def phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phone: Mobile numbers are not supported on the international site.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "phone"))

    @phone.setter
    def phone(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__14fea6b2f9e245f56cd2395ea46d0d1ceaaa18a500a13a2b2382b0acb6606455)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "phone", value)

    @builtins.property
    @jsii.member(jsii_name="realNickName")
    def real_nick_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: realNickName: The display name of the user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "realNickName"))

    @real_nick_name.setter
    def real_nick_name(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__5235ac0580d449ba8c43f2db61066bbdfb75e1c5b6c71c3e383a3628f52b7c95)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "realNickName", value)

    @builtins.property
    @jsii.member(jsii_name="remark")
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remarks of the end user.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "remark"))

    @remark.setter
    def remark(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__904479a8bcacf961e91f0c13292741030fa42cf69fbc99047ab5a888fad48a24)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "remark", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edsuser.RosUserProps",
    jsii_struct_bases=[],
    name_mapping={
        "end_user_id": "endUserId",
        "auto_lock_time": "autoLockTime",
        "business_channel": "businessChannel",
        "email": "email",
        "is_local_admin": "isLocalAdmin",
        "org_id": "orgId",
        "owner_type": "ownerType",
        "password": "password",
        "password_expire_days": "passwordExpireDays",
        "phone": "phone",
        "real_nick_name": "realNickName",
        "remark": "remark",
    },
)
class RosUserProps:
    def __init__(
        self,
        *,
        end_user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_lock_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        business_channel: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_local_admin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        org_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        owner_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password_expire_days: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        real_nick_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosUser``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user

        :param end_user_id: 
        :param auto_lock_time: 
        :param business_channel: 
        :param email: 
        :param is_local_admin: 
        :param org_id: 
        :param owner_type: 
        :param password: 
        :param password_expire_days: 
        :param phone: 
        :param real_nick_name: 
        :param remark: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__751c30118ae512ed8564e1c58e84def378d93552d22dd87ffd79fbf460f3b61b)
            check_type(argname="argument end_user_id", value=end_user_id, expected_type=type_hints["end_user_id"])
            check_type(argname="argument auto_lock_time", value=auto_lock_time, expected_type=type_hints["auto_lock_time"])
            check_type(argname="argument business_channel", value=business_channel, expected_type=type_hints["business_channel"])
            check_type(argname="argument email", value=email, expected_type=type_hints["email"])
            check_type(argname="argument is_local_admin", value=is_local_admin, expected_type=type_hints["is_local_admin"])
            check_type(argname="argument org_id", value=org_id, expected_type=type_hints["org_id"])
            check_type(argname="argument owner_type", value=owner_type, expected_type=type_hints["owner_type"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument password_expire_days", value=password_expire_days, expected_type=type_hints["password_expire_days"])
            check_type(argname="argument phone", value=phone, expected_type=type_hints["phone"])
            check_type(argname="argument real_nick_name", value=real_nick_name, expected_type=type_hints["real_nick_name"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "end_user_id": end_user_id,
        }
        if auto_lock_time is not None:
            self._values["auto_lock_time"] = auto_lock_time
        if business_channel is not None:
            self._values["business_channel"] = business_channel
        if email is not None:
            self._values["email"] = email
        if is_local_admin is not None:
            self._values["is_local_admin"] = is_local_admin
        if org_id is not None:
            self._values["org_id"] = org_id
        if owner_type is not None:
            self._values["owner_type"] = owner_type
        if password is not None:
            self._values["password"] = password
        if password_expire_days is not None:
            self._values["password_expire_days"] = password_expire_days
        if phone is not None:
            self._values["phone"] = phone
        if real_nick_name is not None:
            self._values["real_nick_name"] = real_nick_name
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def end_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: endUserId: The name of the end user. The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
        '''
        result = self._values.get("end_user_id")
        assert result is not None, "Required property 'end_user_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_lock_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: autoLockTime: The date when the account is automatically locked. Format: yyyy-MM-dd HH:mm:ss.
        '''
        result = self._values.get("auto_lock_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def business_channel(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: businessChannel: The channel.
        '''
        result = self._values.get("business_channel")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: email: The email address of the end user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
        '''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_local_admin(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: isLocalAdmin: Whether to set this convenient account as a local administrator.
        '''
        result = self._values.get("is_local_admin")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def org_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: orgId: The organization to which the end user belongs.
        '''
        result = self._values.get("org_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def owner_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        ownerType: The type of the account ownership.
        Enumeration Value:
        CreateFromManager
        Normal
        '''
        result = self._values.get("owner_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: password: The initial password. If this parameter is left empty, an email for password reset is sent to the specified email address.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password_expire_days(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        passwordExpireDays: The default password is valid indefinitely. This parameter can be used to set a validity period of 30 to 365 days. When the password expires, the end user must change the password before logging in again.
        .. epigraph::

        This feature is currently in invitation-only testing. To try it, submit a ticket to enable it.
        '''
        result = self._values.get("password_expire_days")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: phone: Mobile numbers are not supported on the international site.
        '''
        result = self._values.get("phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def real_nick_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: realNickName: The display name of the user.
        '''
        result = self._values.get("real_nick_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: remark: The remarks of the end user.
        '''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosUserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IUser)
class User(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-edsuser.User",
):
    '''This class encapsulates and extends the ROS resource type ``ALIYUN::EdsUser::User``, which is used to create a convenience user.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosUser``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["UserProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7a1e1aa762e9741681bf25f2867ed0c4cac2116041b20ec05124d2cfeaad209)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrEndUserId")
    def attr_end_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute EndUserId: The name of the end user.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrEndUserId"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "UserProps":
        return typing.cast("UserProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__16c1644ae7f1168532d43d89c0f4839d0ed7062b4063e40844f51acda0912d49)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__cfed6fec1817053abc3d4f121dcf1466f86ff5c8decabe4537df1b0ed6dc6272)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__beec5ac04415f24a811e5f274aef226c39d6797192b46d9b73873e1174b843cd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-edsuser.UserProps",
    jsii_struct_bases=[],
    name_mapping={
        "end_user_id": "endUserId",
        "auto_lock_time": "autoLockTime",
        "business_channel": "businessChannel",
        "email": "email",
        "is_local_admin": "isLocalAdmin",
        "org_id": "orgId",
        "owner_type": "ownerType",
        "password": "password",
        "password_expire_days": "passwordExpireDays",
        "phone": "phone",
        "real_nick_name": "realNickName",
        "remark": "remark",
    },
)
class UserProps:
    def __init__(
        self,
        *,
        end_user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        auto_lock_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        business_channel: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        is_local_admin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        org_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        owner_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        password_expire_days: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        real_nick_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``User``.

        See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edsuser-user

        :param end_user_id: Property endUserId: The name of the end user. The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
        :param auto_lock_time: Property autoLockTime: The date when the account is automatically locked. Format: yyyy-MM-dd HH:mm:ss.
        :param business_channel: Property businessChannel: The channel.
        :param email: Property email: The email address of the end user. The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
        :param is_local_admin: Property isLocalAdmin: Whether to set this convenient account as a local administrator.
        :param org_id: Property orgId: The organization to which the end user belongs.
        :param owner_type: Property ownerType: The type of the account ownership. Enumeration Value: CreateFromManager Normal
        :param password: Property password: The initial password. If this parameter is left empty, an email for password reset is sent to the specified email address.
        :param password_expire_days: Property passwordExpireDays: The default password is valid indefinitely. This parameter can be used to set a validity period of 30 to 365 days. When the password expires, the end user must change the password before logging in again. .. epigraph:: This feature is currently in invitation-only testing. To try it, submit a ticket to enable it.
        :param phone: Property phone: Mobile numbers are not supported on the international site.
        :param real_nick_name: Property realNickName: The display name of the user.
        :param remark: Property remark: The remarks of the end user.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7b7ffa1da341679be795697a8896d8de7a8fee4dc6fce517b3326873e3ed5cd8)
            check_type(argname="argument end_user_id", value=end_user_id, expected_type=type_hints["end_user_id"])
            check_type(argname="argument auto_lock_time", value=auto_lock_time, expected_type=type_hints["auto_lock_time"])
            check_type(argname="argument business_channel", value=business_channel, expected_type=type_hints["business_channel"])
            check_type(argname="argument email", value=email, expected_type=type_hints["email"])
            check_type(argname="argument is_local_admin", value=is_local_admin, expected_type=type_hints["is_local_admin"])
            check_type(argname="argument org_id", value=org_id, expected_type=type_hints["org_id"])
            check_type(argname="argument owner_type", value=owner_type, expected_type=type_hints["owner_type"])
            check_type(argname="argument password", value=password, expected_type=type_hints["password"])
            check_type(argname="argument password_expire_days", value=password_expire_days, expected_type=type_hints["password_expire_days"])
            check_type(argname="argument phone", value=phone, expected_type=type_hints["phone"])
            check_type(argname="argument real_nick_name", value=real_nick_name, expected_type=type_hints["real_nick_name"])
            check_type(argname="argument remark", value=remark, expected_type=type_hints["remark"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "end_user_id": end_user_id,
        }
        if auto_lock_time is not None:
            self._values["auto_lock_time"] = auto_lock_time
        if business_channel is not None:
            self._values["business_channel"] = business_channel
        if email is not None:
            self._values["email"] = email
        if is_local_admin is not None:
            self._values["is_local_admin"] = is_local_admin
        if org_id is not None:
            self._values["org_id"] = org_id
        if owner_type is not None:
            self._values["owner_type"] = owner_type
        if password is not None:
            self._values["password"] = password
        if password_expire_days is not None:
            self._values["password_expire_days"] = password_expire_days
        if phone is not None:
            self._values["phone"] = phone
        if real_nick_name is not None:
            self._values["real_nick_name"] = real_nick_name
        if remark is not None:
            self._values["remark"] = remark

    @builtins.property
    def end_user_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property endUserId: The name of the end user.

        The name must be 3 to 24 characters in length, and can contain lowercase letters, digits, and underscores (_).
        '''
        result = self._values.get("end_user_id")
        assert result is not None, "Required property 'end_user_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def auto_lock_time(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property autoLockTime: The date when the account is automatically locked.

        Format: yyyy-MM-dd HH:mm:ss.
        '''
        result = self._values.get("auto_lock_time")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def business_channel(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property businessChannel: The channel.'''
        result = self._values.get("business_channel")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def email(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property email: The email address of the end user.

        The email address is used to receive notifications about events such as desktop assignment. You must specify an email address or a mobile number to receive notifications.
        '''
        result = self._values.get("email")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def is_local_admin(
        self,
    ) -> typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property isLocalAdmin: Whether to set this convenient account as a local administrator.'''
        result = self._values.get("is_local_admin")
        return typing.cast(typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def org_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property orgId: The organization to which the end user belongs.'''
        result = self._values.get("org_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def owner_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property ownerType: The type of the account ownership.

        Enumeration Value:
        CreateFromManager
        Normal
        '''
        result = self._values.get("owner_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property password: The initial password.

        If this parameter is left empty, an email for password reset is sent to the specified email address.
        '''
        result = self._values.get("password")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def password_expire_days(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property passwordExpireDays: The default password is valid indefinitely.

        This parameter can be used to set a validity period of 30 to 365 days. When the password expires, the end user must change the password before logging in again.
        .. epigraph::

           This feature is currently in invitation-only testing. To try it, submit a ticket to enable it.
        '''
        result = self._values.get("password_expire_days")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def phone(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property phone: Mobile numbers are not supported on the international site.'''
        result = self._values.get("phone")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def real_nick_name(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property realNickName: The display name of the user.'''
        result = self._values.get("real_nick_name")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def remark(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property remark: The remarks of the end user.'''
        result = self._values.get("remark")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "UserProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IUser",
    "RosUser",
    "RosUserProps",
    "User",
    "UserProps",
]

publication.publish()

def _typecheckingstub__3c5a4c9720caf8825a704f956c98deaeef89e04f347a9fc844ec2da1a3a06ca1(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosUserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__4511f7ff4ff1bc2348cbc0c47721a118b1ff5aa8fba557233bd78018019c9822(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__be1e52696727bb9ce7e5883686a3011ace689cae40965072b5f3e71ddc12293a(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f4299a7632d0bd250deafe656ede74f85133e820463f0e72cf5e80c80c367b61(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43695132d867fd9ca120967c31f062f0103d0d24a4a357fcb9f457700641e663(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__43311d7cb648f20dc511d982ac8837db209261a276c5dc1af65118e921b78909(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80dc9fa147e4e3843e032e8a27c32cd821efae3e9231f3cf122a848811dbd902(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__474478db9e0810a5925af96c2656616153a30c593ccc720c6d4c1160f6041b05(
    value: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__80d878cac226b9a4653903b5421b8ecb3fa606f3b40636a327894165c2b06052(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c2b739c0a52b692478f690862bb57c24bb9ba05cd169f98a823f1f9ede6a5bcb(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3b60542f1657c043a98226a0cd1e792b7ee96e02edd1d9c404fa7fcc79606c6b(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d691bff6398268970e103dffd698f7964d23dec8198d8a39bda55c9e62ea9bdf(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__14fea6b2f9e245f56cd2395ea46d0d1ceaaa18a500a13a2b2382b0acb6606455(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__5235ac0580d449ba8c43f2db61066bbdfb75e1c5b6c71c3e383a3628f52b7c95(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__904479a8bcacf961e91f0c13292741030fa42cf69fbc99047ab5a888fad48a24(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__751c30118ae512ed8564e1c58e84def378d93552d22dd87ffd79fbf460f3b61b(
    *,
    end_user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_lock_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    business_channel: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_local_admin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    org_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    owner_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password_expire_days: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    real_nick_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7a1e1aa762e9741681bf25f2867ed0c4cac2116041b20ec05124d2cfeaad209(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[UserProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__16c1644ae7f1168532d43d89c0f4839d0ed7062b4063e40844f51acda0912d49(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__cfed6fec1817053abc3d4f121dcf1466f86ff5c8decabe4537df1b0ed6dc6272(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__beec5ac04415f24a811e5f274aef226c39d6797192b46d9b73873e1174b843cd(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7b7ffa1da341679be795697a8896d8de7a8fee4dc6fce517b3326873e3ed5cd8(
    *,
    end_user_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    auto_lock_time: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    business_channel: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    email: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    is_local_admin: typing.Optional[typing.Union[builtins.bool, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    org_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    owner_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    password_expire_days: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    phone: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    real_nick_name: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    remark: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
