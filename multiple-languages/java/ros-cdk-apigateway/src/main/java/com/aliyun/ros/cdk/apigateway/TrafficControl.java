package com.aliyun.ros.cdk.apigateway;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ApiGateway::TrafficControl</code>, which is used to create a custom throttling policy.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:30.527Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.TrafficControl")
public class TrafficControl extends com.aliyun.ros.cdk.core.Resource {

    protected TrafficControl(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected TrafficControl(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public TrafficControl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.TrafficControlProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public TrafficControl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.TrafficControlProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute TrafficControlId: The id of the traffic control.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficControlId() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficControlId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.TrafficControlProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apigateway.TrafficControlProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.TrafficControlProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.TrafficControl}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.TrafficControl> {
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
        private final com.aliyun.ros.cdk.apigateway.TrafficControlProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.TrafficControlProps.Builder();
        }

        /**
         * Property apiDefault: Default API traffic value.
         * <p>
         * @return {@code this}
         * @param apiDefault Property apiDefault: Default API traffic value. This parameter is required.
         */
        public Builder apiDefault(final java.lang.Number apiDefault) {
            this.props.apiDefault(apiDefault);
            return this;
        }
        /**
         * Property apiDefault: Default API traffic value.
         * <p>
         * @return {@code this}
         * @param apiDefault Property apiDefault: Default API traffic value. This parameter is required.
         */
        public Builder apiDefault(final com.aliyun.ros.cdk.core.IResolvable apiDefault) {
            this.props.apiDefault(apiDefault);
            return this;
        }

        /**
         * Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
         * <p>
         * @return {@code this}
         * @param trafficControlName Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         */
        public Builder trafficControlName(final java.lang.String trafficControlName) {
            this.props.trafficControlName(trafficControlName);
            return this;
        }
        /**
         * Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
         * <p>
         * @return {@code this}
         * @param trafficControlName Property trafficControlName: The name of the traffic control.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character. This parameter is required.
         */
        public Builder trafficControlName(final com.aliyun.ros.cdk.core.IResolvable trafficControlName) {
            this.props.trafficControlName(trafficControlName);
            return this;
        }

        /**
         * Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
         * <p>
         * @return {@code this}
         * @param trafficControlUnit Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE. This parameter is required.
         */
        public Builder trafficControlUnit(final java.lang.String trafficControlUnit) {
            this.props.trafficControlUnit(trafficControlUnit);
            return this;
        }
        /**
         * Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE.
         * <p>
         * @return {@code this}
         * @param trafficControlUnit Property trafficControlUnit: Traffic control unit, DAY/HOUR/MINUTE. This parameter is required.
         */
        public Builder trafficControlUnit(final com.aliyun.ros.cdk.core.IResolvable trafficControlUnit) {
            this.props.trafficControlUnit(trafficControlUnit);
            return this;
        }

        /**
         * Property appDefault: Default APP traffic value.
         * <p>
         * @return {@code this}
         * @param appDefault Property appDefault: Default APP traffic value. This parameter is required.
         */
        public Builder appDefault(final java.lang.String appDefault) {
            this.props.appDefault(appDefault);
            return this;
        }
        /**
         * Property appDefault: Default APP traffic value.
         * <p>
         * @return {@code this}
         * @param appDefault Property appDefault: Default APP traffic value. This parameter is required.
         */
        public Builder appDefault(final com.aliyun.ros.cdk.core.IResolvable appDefault) {
            this.props.appDefault(appDefault);
            return this;
        }

        /**
         * Property description: Description of the traffic control, less than 180 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the traffic control, less than 180 characters. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the traffic control, less than 180 characters.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the traffic control, less than 180 characters. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property special: Special traffic controls.
         * <p>
         * @return {@code this}
         * @param special Property special: Special traffic controls. This parameter is required.
         */
        public Builder special(final com.aliyun.ros.cdk.core.IResolvable special) {
            this.props.special(special);
            return this;
        }
        /**
         * Property special: Special traffic controls.
         * <p>
         * @return {@code this}
         * @param special Property special: Special traffic controls. This parameter is required.
         */
        public Builder special(final java.util.List<? extends java.lang.Object> special) {
            this.props.special(special);
            return this;
        }

        /**
         * Property userDefault: Default user traffic value.
         * <p>
         * @return {@code this}
         * @param userDefault Property userDefault: Default user traffic value. This parameter is required.
         */
        public Builder userDefault(final java.lang.String userDefault) {
            this.props.userDefault(userDefault);
            return this;
        }
        /**
         * Property userDefault: Default user traffic value.
         * <p>
         * @return {@code this}
         * @param userDefault Property userDefault: Default user traffic value. This parameter is required.
         */
        public Builder userDefault(final com.aliyun.ros.cdk.core.IResolvable userDefault) {
            this.props.userDefault(userDefault);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apigateway.TrafficControl}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.TrafficControl build() {
            return new com.aliyun.ros.cdk.apigateway.TrafficControl(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
