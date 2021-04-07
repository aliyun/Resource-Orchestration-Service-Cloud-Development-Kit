using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Edas
{
    /// <summary>Properties for defining a `ALIYUN::EDAS::UserDefineRegion`.</summary>
    [JsiiInterface(nativeType: typeof(IUserDefineRegionProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.UserDefineRegionProps")]
    public interface IUserDefineRegionProps
    {
        /// <summary>Property regionName: Logical region (or namespace) name.</summary>
        [JsiiProperty(name: "regionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RegionName
        {
            get;
        }

        /// <summary>Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").</summary>
        [JsiiProperty(name: "regionTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RegionTag
        {
            get;
        }

        /// <summary>Property debugEnable: Whether debug is enable.</summary>
        [JsiiProperty(name: "debugEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DebugEnable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Logic region (or namespace) description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::EDAS::UserDefineRegion`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IUserDefineRegionProps), fullyQualifiedName: "@alicloud/ros-cdk-edas.UserDefineRegionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Edas.IUserDefineRegionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property regionName: Logical region (or namespace) name.</summary>
            [JsiiProperty(name: "regionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RegionName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property regionTag: Logic region (or namespace) ID (format: "physical region ID: logical zone identifier", or "logical zone identifier").</summary>
            [JsiiProperty(name: "regionTag", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RegionTag
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property debugEnable: Whether debug is enable.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "debugEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DebugEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: Logic region (or namespace) description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
