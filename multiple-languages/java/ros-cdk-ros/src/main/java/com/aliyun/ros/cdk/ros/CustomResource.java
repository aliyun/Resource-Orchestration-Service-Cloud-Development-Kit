package com.aliyun.ros.cdk.ros;

/**
 * A ROS resource type:  `ALIYUN::ROS::CustomResource`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-30T05:21:20.523Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.CustomResource")
public class CustomResource extends com.aliyun.ros.cdk.core.Resource {

    protected CustomResource(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomResource(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ROS::CustomResource`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public CustomResource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.CustomResourceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ROS::CustomResource`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public CustomResource(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.CustomResourceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Outputs: Output data received from service provider.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOutputs() {
        return software.amazon.jsii.Kernel.get(this, "attrOutputs", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.CustomResource}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.CustomResource> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ros.CustomResourceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.CustomResourceProps.Builder();
        }

        /**
         * Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
         * <p>
         * Allowed values:
         * <p>
         * <ul>
         * <li>Function Compute: acs:fc:&lt;region_id&gt;:&lt;account_id&gt;:services/&lt;service_name&gt;/functions/&lt;function_name&gt;</li>
         * <li>MNS Queue: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:queues/&lt;queue_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/queues/&lt;queue_name&gt;</li>
         * <li>MNS Topic: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:topics/&lt;topic_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/topics/&lt;topic_name&gt;</li>
         * <li>HTTP&amp;HTTPS: web[options]:<url>
         * Two options are supported:
         * <p>
         * <ul>
         * <li>sync: sync HTTP&amp;HTTPS request.</li>
         * <li>idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
         * Examples:</li>
         * <li>acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function</li>
         * <li>acs:mns:cn-hangzhou:123456789:queues/test-queue</li>
         * <li>acs:mns:cn-hangzhou:123456789:/queues/test-queue</li>
         * <li>acs:mns:cn-hangzhou:123456789:topics/test-topic</li>
         * <li>acs:mns:cn-hangzhou:123456789:/topics/test-topic</li>
         * <li>web:https://abc.com</li>
         * <li>web[sync]:http://abc.com</li>
         * <li>web[sync,idempotent]:https://abc.com</li>
         * </ul></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param serviceToken Property serviceToken: The service token that was given to the template developer by the service provider to access the service. This parameter is required.
         */
        public Builder serviceToken(final java.lang.String serviceToken) {
            this.props.serviceToken(serviceToken);
            return this;
        }
        /**
         * Property serviceToken: The service token that was given to the template developer by the service provider to access the service.
         * <p>
         * Allowed values:
         * <p>
         * <ul>
         * <li>Function Compute: acs:fc:&lt;region_id&gt;:&lt;account_id&gt;:services/&lt;service_name&gt;/functions/&lt;function_name&gt;</li>
         * <li>MNS Queue: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:queues/&lt;queue_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/queues/&lt;queue_name&gt;</li>
         * <li>MNS Topic: acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:topics/&lt;topic_name&gt; or acs:mns:&lt;region_id&gt;:&lt;account_id&gt;:/topics/&lt;topic_name&gt;</li>
         * <li>HTTP&amp;HTTPS: web[options]:<url>
         * Two options are supported:
         * <p>
         * <ul>
         * <li>sync: sync HTTP&amp;HTTPS request.</li>
         * <li>idempotent: indicates that the Create request is idempotent. Update and Delete requests should be always idempotent.
         * Examples:</li>
         * <li>acs:fc:cn-hangzhou:123456789:services/test-service/functions/test-function</li>
         * <li>acs:mns:cn-hangzhou:123456789:queues/test-queue</li>
         * <li>acs:mns:cn-hangzhou:123456789:/queues/test-queue</li>
         * <li>acs:mns:cn-hangzhou:123456789:topics/test-topic</li>
         * <li>acs:mns:cn-hangzhou:123456789:/topics/test-topic</li>
         * <li>web:https://abc.com</li>
         * <li>web[sync]:http://abc.com</li>
         * <li>web[sync,idempotent]:https://abc.com</li>
         * </ul></li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param serviceToken Property serviceToken: The service token that was given to the template developer by the service provider to access the service. This parameter is required.
         */
        public Builder serviceToken(final com.aliyun.ros.cdk.core.IResolvable serviceToken) {
            this.props.serviceToken(serviceToken);
            return this;
        }

        /**
         * Property timeout: Timeout seconds before service provider responses.
         * <p>
         * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&amp;HTTPS request.
         * Timeout seconds are always 10 for sync HTTP&amp;HTTPS request.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: Timeout seconds before service provider responses. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: Timeout seconds before service provider responses.
         * <p>
         * It takes effects only if the type of ServiceToken is Function Compute, MNS Queue, MNS Topic or async HTTP&amp;HTTPS request.
         * Timeout seconds are always 10 for sync HTTP&amp;HTTPS request.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: Timeout seconds before service provider responses. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * Property httpConfig: Config for HTTP&HTTPS service provider.
         * <p>
         * @return {@code this}
         * @param httpConfig Property httpConfig: Config for HTTP&HTTPS service provider. This parameter is required.
         */
        public Builder httpConfig(final com.aliyun.ros.cdk.core.IResolvable httpConfig) {
            this.props.httpConfig(httpConfig);
            return this;
        }
        /**
         * Property httpConfig: Config for HTTP&HTTPS service provider.
         * <p>
         * @return {@code this}
         * @param httpConfig Property httpConfig: Config for HTTP&HTTPS service provider. This parameter is required.
         */
        public Builder httpConfig(final com.aliyun.ros.cdk.ros.RosCustomResource.HttpConfigProperty httpConfig) {
            this.props.httpConfig(httpConfig);
            return this;
        }

        /**
         * Property parameters: Parameters to be passed to service provider.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: Parameters to be passed to service provider. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * Property parameters: Parameters to be passed to service provider.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: Parameters to be passed to service provider. This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ros.CustomResource}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.CustomResource build() {
            return new com.aliyun.ros.cdk.ros.CustomResource(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
