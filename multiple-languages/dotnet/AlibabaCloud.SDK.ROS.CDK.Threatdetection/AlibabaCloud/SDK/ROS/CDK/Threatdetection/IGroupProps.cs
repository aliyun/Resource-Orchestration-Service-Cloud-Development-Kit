using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `Group`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.GroupProps")]
    public interface IGroupProps
    {
        /// <summary>Property groupId: The ID of the server group for which you want to add to or remove servers.</summary>
        /// <remarks>
        ///     To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the <a href="~~DescribeAllGroups~~">DescribeAllGroups</a> to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.</summary>
        /// <remarks>
        ///     To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the <a href="~~DescribeAllGroups~~">DescribeAllGroups</a> operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Group`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-group
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.GroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupId: The ID of the server group for which you want to add to or remove servers.</summary>
            /// <remarks>
            ///     To modify the mapping between an asset and an asset group, you must provide the ID of the asset group. You can call the <a href="~~DescribeAllGroups~~">DescribeAllGroups</a> to query the IDs of asset groups. If you do not configure this parameter when you call this operation, an asset group is created.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property groupName: The name of the server group that you want to create or the server group for which you want to add or remove a server.</summary>
            /// <remarks>
            ///     To modify the mapping between a server and a server group, you must provide the name of the server group. You can call the <a href="~~DescribeAllGroups~~">DescribeAllGroups</a> operation to query the names of server groups. If you do not configure GroupID when you call this operation, a server group is created. In this case, you must configure GroupName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
