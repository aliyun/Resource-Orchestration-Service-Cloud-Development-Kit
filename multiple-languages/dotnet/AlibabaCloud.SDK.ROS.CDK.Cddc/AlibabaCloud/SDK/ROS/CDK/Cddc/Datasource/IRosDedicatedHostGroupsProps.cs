using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource
{
    /// <summary>Properties for defining a `RosDedicatedHostGroups`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDedicatedHostGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.datasource.RosDedicatedHostGroupsProps")]
    public interface IRosDedicatedHostGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dedicatedHostGroupId: Dedicated Host Group ID.
        /// </remarks>
        [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: engine: Database Engine Type.
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Engine
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDedicatedHostGroups`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDedicatedHostGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-cddc.datasource.RosDedicatedHostGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cddc.Datasource.IRosDedicatedHostGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dedicatedHostGroupId: Dedicated Host Group ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: engine: Database Engine Type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Engine
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
