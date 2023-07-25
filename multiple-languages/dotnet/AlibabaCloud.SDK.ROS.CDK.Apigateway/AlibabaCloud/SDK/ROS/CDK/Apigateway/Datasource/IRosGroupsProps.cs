using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ApiGateway::Groups`.</summary>
    [JsiiInterface(nativeType: typeof(IRosGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.datasource.RosGroupsProps")]
    public interface IRosGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupId: API group ID.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupName: Specified keyword of the API group name.
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

        /// <remarks>
        /// <strong>Property</strong>: instanceId: API Gateway Instance ID.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sort: Sort.
        /// </remarks>
        [JsiiProperty(name: "sort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Sort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::ApiGateway::Groups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.datasource.RosGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.Datasource.IRosGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: API group ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: Specified keyword of the API group name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: API Gateway Instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sort: Sort.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sort
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
