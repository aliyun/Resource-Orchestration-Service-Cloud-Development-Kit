package com.aliyun.ros.cdk.apigateway;

/**
 * A ROS template type:  `ALIYUN::ApiGateway::TrafficControl`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:24.611Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosTrafficControl")
public class RosTrafficControl extends com.aliyun.ros.cdk.core.RosResource {

    protected RosTrafficControl(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosTrafficControl(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apigateway.RosTrafficControl.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControl`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosTrafficControl(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apigateway.RosTrafficControlProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTrafficControlId() {
        return software.amazon.jsii.Kernel.get(this, "attrTrafficControlId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getApiDefault() {
        return software.amazon.jsii.Kernel.get(this, "apiDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApiDefault(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "apiDefault", java.util.Objects.requireNonNull(value, "apiDefault is required"));
    }

    /**
     */
    public void setApiDefault(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "apiDefault", java.util.Objects.requireNonNull(value, "apiDefault is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTrafficControlName() {
        return software.amazon.jsii.Kernel.get(this, "trafficControlName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficControlName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficControlName", java.util.Objects.requireNonNull(value, "trafficControlName is required"));
    }

    /**
     */
    public void setTrafficControlName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficControlName", java.util.Objects.requireNonNull(value, "trafficControlName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTrafficControlUnit() {
        return software.amazon.jsii.Kernel.get(this, "trafficControlUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTrafficControlUnit(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "trafficControlUnit", java.util.Objects.requireNonNull(value, "trafficControlUnit is required"));
    }

    /**
     */
    public void setTrafficControlUnit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "trafficControlUnit", java.util.Objects.requireNonNull(value, "trafficControlUnit is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAppDefault() {
        return software.amazon.jsii.Kernel.get(this, "appDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAppDefault(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "appDefault", value);
    }

    /**
     */
    public void setAppDefault(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "appDefault", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpecial() {
        return software.amazon.jsii.Kernel.get(this, "special", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpecial(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "special", value);
    }

    /**
     */
    public void setSpecial(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "special", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUserDefault() {
        return software.amazon.jsii.Kernel.get(this, "userDefault", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUserDefault(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "userDefault", value);
    }

    /**
     */
    public void setUserDefault(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "userDefault", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty")
    @software.amazon.jsii.Jsii.Proxy(SpecialProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SpecialProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSpecialKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSpecialType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getTrafficValue();

        /**
         * @return a {@link Builder} of {@link SpecialProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SpecialProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SpecialProperty> {
            java.lang.Object specialKey;
            java.lang.Object specialType;
            java.lang.Object trafficValue;

            /**
             * Sets the value of {@link SpecialProperty#getSpecialKey}
             * @param specialKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder specialKey(java.lang.String specialKey) {
                this.specialKey = specialKey;
                return this;
            }

            /**
             * Sets the value of {@link SpecialProperty#getSpecialKey}
             * @param specialKey the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder specialKey(com.aliyun.ros.cdk.core.IResolvable specialKey) {
                this.specialKey = specialKey;
                return this;
            }

            /**
             * Sets the value of {@link SpecialProperty#getSpecialType}
             * @param specialType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder specialType(java.lang.String specialType) {
                this.specialType = specialType;
                return this;
            }

            /**
             * Sets the value of {@link SpecialProperty#getSpecialType}
             * @param specialType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder specialType(com.aliyun.ros.cdk.core.IResolvable specialType) {
                this.specialType = specialType;
                return this;
            }

            /**
             * Sets the value of {@link SpecialProperty#getTrafficValue}
             * @param trafficValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trafficValue(java.lang.Number trafficValue) {
                this.trafficValue = trafficValue;
                return this;
            }

            /**
             * Sets the value of {@link SpecialProperty#getTrafficValue}
             * @param trafficValue the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder trafficValue(com.aliyun.ros.cdk.core.IResolvable trafficValue) {
                this.trafficValue = trafficValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SpecialProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SpecialProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SpecialProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SpecialProperty {
            private final java.lang.Object specialKey;
            private final java.lang.Object specialType;
            private final java.lang.Object trafficValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.specialKey = software.amazon.jsii.Kernel.get(this, "specialKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.specialType = software.amazon.jsii.Kernel.get(this, "specialType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.trafficValue = software.amazon.jsii.Kernel.get(this, "trafficValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.specialKey = java.util.Objects.requireNonNull(builder.specialKey, "specialKey is required");
                this.specialType = java.util.Objects.requireNonNull(builder.specialType, "specialType is required");
                this.trafficValue = java.util.Objects.requireNonNull(builder.trafficValue, "trafficValue is required");
            }

            @Override
            public final java.lang.Object getSpecialKey() {
                return this.specialKey;
            }

            @Override
            public final java.lang.Object getSpecialType() {
                return this.specialType;
            }

            @Override
            public final java.lang.Object getTrafficValue() {
                return this.trafficValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("specialKey", om.valueToTree(this.getSpecialKey()));
                data.set("specialType", om.valueToTree(this.getSpecialType()));
                data.set("trafficValue", om.valueToTree(this.getTrafficValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.RosTrafficControl.SpecialProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SpecialProperty.Jsii$Proxy that = (SpecialProperty.Jsii$Proxy) o;

                if (!specialKey.equals(that.specialKey)) return false;
                if (!specialType.equals(that.specialType)) return false;
                return this.trafficValue.equals(that.trafficValue);
            }

            @Override
            public final int hashCode() {
                int result = this.specialKey.hashCode();
                result = 31 * result + (this.specialType.hashCode());
                result = 31 * result + (this.trafficValue.hashCode());
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apigateway.RosTrafficControl}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apigateway.RosTrafficControl> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.apigateway.RosTrafficControlProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apigateway.RosTrafficControlProps.Builder();
        }

        /**
         * @return {@code this}
         * @param apiDefault This parameter is required.
         */
        public Builder apiDefault(final java.lang.Number apiDefault) {
            this.props.apiDefault(apiDefault);
            return this;
        }
        /**
         * @return {@code this}
         * @param apiDefault This parameter is required.
         */
        public Builder apiDefault(final com.aliyun.ros.cdk.core.IResolvable apiDefault) {
            this.props.apiDefault(apiDefault);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficControlName This parameter is required.
         */
        public Builder trafficControlName(final java.lang.String trafficControlName) {
            this.props.trafficControlName(trafficControlName);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficControlName This parameter is required.
         */
        public Builder trafficControlName(final com.aliyun.ros.cdk.core.IResolvable trafficControlName) {
            this.props.trafficControlName(trafficControlName);
            return this;
        }

        /**
         * @return {@code this}
         * @param trafficControlUnit This parameter is required.
         */
        public Builder trafficControlUnit(final java.lang.String trafficControlUnit) {
            this.props.trafficControlUnit(trafficControlUnit);
            return this;
        }
        /**
         * @return {@code this}
         * @param trafficControlUnit This parameter is required.
         */
        public Builder trafficControlUnit(final com.aliyun.ros.cdk.core.IResolvable trafficControlUnit) {
            this.props.trafficControlUnit(trafficControlUnit);
            return this;
        }

        /**
         * @return {@code this}
         * @param appDefault This parameter is required.
         */
        public Builder appDefault(final java.lang.String appDefault) {
            this.props.appDefault(appDefault);
            return this;
        }
        /**
         * @return {@code this}
         * @param appDefault This parameter is required.
         */
        public Builder appDefault(final com.aliyun.ros.cdk.core.IResolvable appDefault) {
            this.props.appDefault(appDefault);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param special This parameter is required.
         */
        public Builder special(final com.aliyun.ros.cdk.core.IResolvable special) {
            this.props.special(special);
            return this;
        }
        /**
         * @return {@code this}
         * @param special This parameter is required.
         */
        public Builder special(final java.util.List<? extends java.lang.Object> special) {
            this.props.special(special);
            return this;
        }

        /**
         * @return {@code this}
         * @param userDefault This parameter is required.
         */
        public Builder userDefault(final java.lang.String userDefault) {
            this.props.userDefault(userDefault);
            return this;
        }
        /**
         * @return {@code this}
         * @param userDefault This parameter is required.
         */
        public Builder userDefault(final com.aliyun.ros.cdk.core.IResolvable userDefault) {
            this.props.userDefault(userDefault);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.apigateway.RosTrafficControl}.
         */
        @Override
        public com.aliyun.ros.cdk.apigateway.RosTrafficControl build() {
            return new com.aliyun.ros.cdk.apigateway.RosTrafficControl(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
