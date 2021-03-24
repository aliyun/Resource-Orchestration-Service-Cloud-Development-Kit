using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>A ROS template type:  `ALIYUN::ApiGateway::TrafficControl`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Apigateway.RosTrafficControl), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosTrafficControl", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosTrafficControlProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosTrafficControl : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ApiGateway::TrafficControl`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosTrafficControl(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosTrafficControlProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosTrafficControl(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosTrafficControl(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Apigateway.RosTrafficControl))!;

        /// <remarks>
        /// <strong>Attribute</strong>: TrafficControlId: The id of the traffic control
        /// </remarks>
        [JsiiProperty(name: "attrTrafficControlId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTrafficControlId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: apiDefault: Default API traffic value.
        /// </remarks>
        [JsiiProperty(name: "apiDefault", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double ApiDefault
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
        /// </remarks>
        [JsiiProperty(name: "trafficControlName", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string TrafficControlName
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
        /// </remarks>
        [JsiiProperty(name: "trafficControlUnit", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string TrafficControlUnit
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: appDefault: Default APP traffic value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "appDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AppDefault
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the traffic control, less than 180 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Description
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: special: Special traffic controls.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "special", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Special
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: userDefault: Default user traffic value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "userDefault", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? UserDefault
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(ISpecialProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty")]
        public interface ISpecialProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: specialKey: The key of special traffic control.
            /// </remarks>
            [JsiiProperty(name: "specialKey", typeJson: "{\"primitive\":\"string\"}")]
            string SpecialKey
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: specialType: The type of special traffic control.
            /// </remarks>
            [JsiiProperty(name: "specialType", typeJson: "{\"primitive\":\"string\"}")]
            string SpecialType
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficValue: The value of special traffic control
            /// </remarks>
            [JsiiProperty(name: "trafficValue", typeJson: "{\"primitive\":\"number\"}")]
            double TrafficValue
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ISpecialProperty), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.RosTrafficControl.ISpecialProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: specialKey: The key of special traffic control.
                /// </remarks>
                [JsiiProperty(name: "specialKey", typeJson: "{\"primitive\":\"string\"}")]
                public string SpecialKey
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: specialType: The type of special traffic control.
                /// </remarks>
                [JsiiProperty(name: "specialType", typeJson: "{\"primitive\":\"string\"}")]
                public string SpecialType
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: trafficValue: The value of special traffic control
                /// </remarks>
                [JsiiProperty(name: "trafficValue", typeJson: "{\"primitive\":\"number\"}")]
                public double TrafficValue
                {
                    get => GetInstanceProperty<double>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty")]
        public class SpecialProperty : AlibabaCloud.SDK.ROS.CDK.Apigateway.RosTrafficControl.ISpecialProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: specialKey: The key of special traffic control.
            /// </remarks>
            [JsiiProperty(name: "specialKey", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string SpecialKey
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: specialType: The type of special traffic control.
            /// </remarks>
            [JsiiProperty(name: "specialType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string SpecialType
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficValue: The value of special traffic control
            /// </remarks>
            [JsiiProperty(name: "trafficValue", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
            public double TrafficValue
            {
                get;
                set;
            }
        }
    }
}
