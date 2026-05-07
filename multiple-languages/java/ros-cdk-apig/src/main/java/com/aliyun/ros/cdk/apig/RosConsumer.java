package com.aliyun.ros.cdk.apig;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::APIG::Consumer</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:45.424Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosConsumer")
public class RosConsumer extends com.aliyun.ros.cdk.core.RosResource {

    protected RosConsumer(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosConsumer(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.apig.RosConsumer.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosConsumer(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.RosConsumerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConsumerId() {
        return software.amazon.jsii.Kernel.get(this, "attrConsumerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAkSkIdentityConfigs() {
        return software.amazon.jsii.Kernel.get(this, "akSkIdentityConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAkSkIdentityConfigs(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "akSkIdentityConfigs", value);
    }

    /**
     */
    public void setAkSkIdentityConfigs(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.apig.RosConsumer.AkSkIdentityConfigsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.apig.RosConsumer.AkSkIdentityConfigsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "akSkIdentityConfigs", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getApikeyIdentityConfig() {
        return software.amazon.jsii.Kernel.get(this, "apikeyIdentityConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setApikeyIdentityConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "apikeyIdentityConfig", value);
    }

    /**
     */
    public void setApikeyIdentityConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apig.RosConsumer.ApikeyIdentityConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "apikeyIdentityConfig", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnable() {
        return software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnable(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enable", value);
    }

    /**
     */
    public void setEnable(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enable", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGatewayType() {
        return software.amazon.jsii.Kernel.get(this, "gatewayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGatewayType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "gatewayType", value);
    }

    /**
     */
    public void setGatewayType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gatewayType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getJwtIdentityConfig() {
        return software.amazon.jsii.Kernel.get(this, "jwtIdentityConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setJwtIdentityConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "jwtIdentityConfig", value);
    }

    /**
     */
    public void setJwtIdentityConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.apig.RosConsumer.JwtIdentityConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "jwtIdentityConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosConsumer.AkSkIdentityConfigsProperty")
    @software.amazon.jsii.Jsii.Proxy(AkSkIdentityConfigsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AkSkIdentityConfigsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAk() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGenerateMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSk() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AkSkIdentityConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AkSkIdentityConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AkSkIdentityConfigsProperty> {
            java.lang.Object ak;
            java.lang.Object generateMode;
            java.lang.Object sk;
            java.lang.Object type;

            /**
             * Sets the value of {@link AkSkIdentityConfigsProperty#getAk}
             * @param ak the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ak(java.lang.String ak) {
                this.ak = ak;
                return this;
            }

            /**
             * Sets the value of {@link AkSkIdentityConfigsProperty#getAk}
             * @param ak the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ak(com.aliyun.ros.cdk.core.IResolvable ak) {
                this.ak = ak;
                return this;
            }

            /**
             * Sets the value of {@link AkSkIdentityConfigsProperty#getGenerateMode}
             * @param generateMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder generateMode(java.lang.String generateMode) {
                this.generateMode = generateMode;
                return this;
            }

            /**
             * Sets the value of {@link AkSkIdentityConfigsProperty#getGenerateMode}
             * @param generateMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder generateMode(com.aliyun.ros.cdk.core.IResolvable generateMode) {
                this.generateMode = generateMode;
                return this;
            }

            /**
             * Sets the value of {@link AkSkIdentityConfigsProperty#getSk}
             * @param sk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sk(java.lang.String sk) {
                this.sk = sk;
                return this;
            }

            /**
             * Sets the value of {@link AkSkIdentityConfigsProperty#getSk}
             * @param sk the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sk(com.aliyun.ros.cdk.core.IResolvable sk) {
                this.sk = sk;
                return this;
            }

            /**
             * Sets the value of {@link AkSkIdentityConfigsProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link AkSkIdentityConfigsProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AkSkIdentityConfigsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AkSkIdentityConfigsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AkSkIdentityConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AkSkIdentityConfigsProperty {
            private final java.lang.Object ak;
            private final java.lang.Object generateMode;
            private final java.lang.Object sk;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ak = software.amazon.jsii.Kernel.get(this, "ak", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.generateMode = software.amazon.jsii.Kernel.get(this, "generateMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.sk = software.amazon.jsii.Kernel.get(this, "sk", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ak = builder.ak;
                this.generateMode = builder.generateMode;
                this.sk = builder.sk;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getAk() {
                return this.ak;
            }

            @Override
            public final java.lang.Object getGenerateMode() {
                return this.generateMode;
            }

            @Override
            public final java.lang.Object getSk() {
                return this.sk;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getAk() != null) {
                    data.set("ak", om.valueToTree(this.getAk()));
                }
                if (this.getGenerateMode() != null) {
                    data.set("generateMode", om.valueToTree(this.getGenerateMode()));
                }
                if (this.getSk() != null) {
                    data.set("sk", om.valueToTree(this.getSk()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosConsumer.AkSkIdentityConfigsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AkSkIdentityConfigsProperty.Jsii$Proxy that = (AkSkIdentityConfigsProperty.Jsii$Proxy) o;

                if (this.ak != null ? !this.ak.equals(that.ak) : that.ak != null) return false;
                if (this.generateMode != null ? !this.generateMode.equals(that.generateMode) : that.generateMode != null) return false;
                if (this.sk != null ? !this.sk.equals(that.sk) : that.sk != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ak != null ? this.ak.hashCode() : 0;
                result = 31 * result + (this.generateMode != null ? this.generateMode.hashCode() : 0);
                result = 31 * result + (this.sk != null ? this.sk.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosConsumer.ApikeyIdentityConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(ApikeyIdentityConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ApikeyIdentityConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApikeySource() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCredentials() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ApikeyIdentityConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ApikeyIdentityConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ApikeyIdentityConfigProperty> {
            java.lang.Object apikeySource;
            java.lang.Object credentials;
            java.lang.Object type;

            /**
             * Sets the value of {@link ApikeyIdentityConfigProperty#getApikeySource}
             * @param apikeySource the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apikeySource(com.aliyun.ros.cdk.core.IResolvable apikeySource) {
                this.apikeySource = apikeySource;
                return this;
            }

            /**
             * Sets the value of {@link ApikeyIdentityConfigProperty#getApikeySource}
             * @param apikeySource the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apikeySource(com.aliyun.ros.cdk.apig.RosConsumer.ApikeySourceProperty apikeySource) {
                this.apikeySource = apikeySource;
                return this;
            }

            /**
             * Sets the value of {@link ApikeyIdentityConfigProperty#getCredentials}
             * @param credentials the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder credentials(com.aliyun.ros.cdk.core.IResolvable credentials) {
                this.credentials = credentials;
                return this;
            }

            /**
             * Sets the value of {@link ApikeyIdentityConfigProperty#getCredentials}
             * @param credentials the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder credentials(java.util.List<? extends java.lang.Object> credentials) {
                this.credentials = credentials;
                return this;
            }

            /**
             * Sets the value of {@link ApikeyIdentityConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link ApikeyIdentityConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ApikeyIdentityConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ApikeyIdentityConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ApikeyIdentityConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApikeyIdentityConfigProperty {
            private final java.lang.Object apikeySource;
            private final java.lang.Object credentials;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.apikeySource = software.amazon.jsii.Kernel.get(this, "apikeySource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.credentials = software.amazon.jsii.Kernel.get(this, "credentials", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.apikeySource = builder.apikeySource;
                this.credentials = builder.credentials;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getApikeySource() {
                return this.apikeySource;
            }

            @Override
            public final java.lang.Object getCredentials() {
                return this.credentials;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getApikeySource() != null) {
                    data.set("apikeySource", om.valueToTree(this.getApikeySource()));
                }
                if (this.getCredentials() != null) {
                    data.set("credentials", om.valueToTree(this.getCredentials()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosConsumer.ApikeyIdentityConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ApikeyIdentityConfigProperty.Jsii$Proxy that = (ApikeyIdentityConfigProperty.Jsii$Proxy) o;

                if (this.apikeySource != null ? !this.apikeySource.equals(that.apikeySource) : that.apikeySource != null) return false;
                if (this.credentials != null ? !this.credentials.equals(that.credentials) : that.credentials != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.apikeySource != null ? this.apikeySource.hashCode() : 0;
                result = 31 * result + (this.credentials != null ? this.credentials.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosConsumer.ApikeySourceProperty")
    @software.amazon.jsii.Jsii.Proxy(ApikeySourceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ApikeySourceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSource();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link ApikeySourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ApikeySourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ApikeySourceProperty> {
            java.lang.Object source;
            java.lang.Object value;

            /**
             * Sets the value of {@link ApikeySourceProperty#getSource}
             * @param source the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder source(java.lang.String source) {
                this.source = source;
                return this;
            }

            /**
             * Sets the value of {@link ApikeySourceProperty#getSource}
             * @param source the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder source(com.aliyun.ros.cdk.core.IResolvable source) {
                this.source = source;
                return this;
            }

            /**
             * Sets the value of {@link ApikeySourceProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link ApikeySourceProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ApikeySourceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ApikeySourceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ApikeySourceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ApikeySourceProperty {
            private final java.lang.Object source;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.source = software.amazon.jsii.Kernel.get(this, "source", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.source = java.util.Objects.requireNonNull(builder.source, "source is required");
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            }

            @Override
            public final java.lang.Object getSource() {
                return this.source;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("source", om.valueToTree(this.getSource()));
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosConsumer.ApikeySourceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ApikeySourceProperty.Jsii$Proxy that = (ApikeySourceProperty.Jsii$Proxy) o;

                if (!source.equals(that.source)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.source.hashCode();
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosConsumer.CredentialsProperty")
    @software.amazon.jsii.Jsii.Proxy(CredentialsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface CredentialsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getGenerateMode();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getApikey() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link CredentialsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link CredentialsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<CredentialsProperty> {
            java.lang.Object generateMode;
            java.lang.Object apikey;

            /**
             * Sets the value of {@link CredentialsProperty#getGenerateMode}
             * @param generateMode the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder generateMode(java.lang.String generateMode) {
                this.generateMode = generateMode;
                return this;
            }

            /**
             * Sets the value of {@link CredentialsProperty#getGenerateMode}
             * @param generateMode the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder generateMode(com.aliyun.ros.cdk.core.IResolvable generateMode) {
                this.generateMode = generateMode;
                return this;
            }

            /**
             * Sets the value of {@link CredentialsProperty#getApikey}
             * @param apikey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apikey(java.lang.String apikey) {
                this.apikey = apikey;
                return this;
            }

            /**
             * Sets the value of {@link CredentialsProperty#getApikey}
             * @param apikey the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder apikey(com.aliyun.ros.cdk.core.IResolvable apikey) {
                this.apikey = apikey;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link CredentialsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public CredentialsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link CredentialsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CredentialsProperty {
            private final java.lang.Object generateMode;
            private final java.lang.Object apikey;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.generateMode = software.amazon.jsii.Kernel.get(this, "generateMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.apikey = software.amazon.jsii.Kernel.get(this, "apikey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.generateMode = java.util.Objects.requireNonNull(builder.generateMode, "generateMode is required");
                this.apikey = builder.apikey;
            }

            @Override
            public final java.lang.Object getGenerateMode() {
                return this.generateMode;
            }

            @Override
            public final java.lang.Object getApikey() {
                return this.apikey;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("generateMode", om.valueToTree(this.getGenerateMode()));
                if (this.getApikey() != null) {
                    data.set("apikey", om.valueToTree(this.getApikey()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosConsumer.CredentialsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                CredentialsProperty.Jsii$Proxy that = (CredentialsProperty.Jsii$Proxy) o;

                if (!generateMode.equals(that.generateMode)) return false;
                return this.apikey != null ? this.apikey.equals(that.apikey) : that.apikey == null;
            }

            @Override
            public final int hashCode() {
                int result = this.generateMode.hashCode();
                result = 31 * result + (this.apikey != null ? this.apikey.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosConsumer.JwtIdentityConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(JwtIdentityConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface JwtIdentityConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getJwks() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getJwtPayloadConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getJwtTokenConfig() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecretType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link JwtIdentityConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link JwtIdentityConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<JwtIdentityConfigProperty> {
            java.lang.Object jwks;
            java.lang.Object jwtPayloadConfig;
            java.lang.Object jwtTokenConfig;
            java.lang.Object secretType;
            java.lang.Object type;

            /**
             * Sets the value of {@link JwtIdentityConfigProperty#getJwks}
             * @param jwks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jwks(java.lang.String jwks) {
                this.jwks = jwks;
                return this;
            }

            /**
             * Sets the value of {@link JwtIdentityConfigProperty#getJwks}
             * @param jwks the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jwks(com.aliyun.ros.cdk.core.IResolvable jwks) {
                this.jwks = jwks;
                return this;
            }

            /**
             * Sets the value of {@link JwtIdentityConfigProperty#getJwtPayloadConfig}
             * @param jwtPayloadConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jwtPayloadConfig(com.aliyun.ros.cdk.core.IResolvable jwtPayloadConfig) {
                this.jwtPayloadConfig = jwtPayloadConfig;
                return this;
            }

            /**
             * Sets the value of {@link JwtIdentityConfigProperty#getJwtPayloadConfig}
             * @param jwtPayloadConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jwtPayloadConfig(com.aliyun.ros.cdk.apig.RosConsumer.JwtPayloadConfigProperty jwtPayloadConfig) {
                this.jwtPayloadConfig = jwtPayloadConfig;
                return this;
            }

            /**
             * Sets the value of {@link JwtIdentityConfigProperty#getJwtTokenConfig}
             * @param jwtTokenConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jwtTokenConfig(com.aliyun.ros.cdk.core.IResolvable jwtTokenConfig) {
                this.jwtTokenConfig = jwtTokenConfig;
                return this;
            }

            /**
             * Sets the value of {@link JwtIdentityConfigProperty#getJwtTokenConfig}
             * @param jwtTokenConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder jwtTokenConfig(com.aliyun.ros.cdk.apig.RosConsumer.JwtTokenConfigProperty jwtTokenConfig) {
                this.jwtTokenConfig = jwtTokenConfig;
                return this;
            }

            /**
             * Sets the value of {@link JwtIdentityConfigProperty#getSecretType}
             * @param secretType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder secretType(java.lang.String secretType) {
                this.secretType = secretType;
                return this;
            }

            /**
             * Sets the value of {@link JwtIdentityConfigProperty#getSecretType}
             * @param secretType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder secretType(com.aliyun.ros.cdk.core.IResolvable secretType) {
                this.secretType = secretType;
                return this;
            }

            /**
             * Sets the value of {@link JwtIdentityConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link JwtIdentityConfigProperty#getType}
             * @param type the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link JwtIdentityConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public JwtIdentityConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link JwtIdentityConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JwtIdentityConfigProperty {
            private final java.lang.Object jwks;
            private final java.lang.Object jwtPayloadConfig;
            private final java.lang.Object jwtTokenConfig;
            private final java.lang.Object secretType;
            private final java.lang.Object type;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.jwks = software.amazon.jsii.Kernel.get(this, "jwks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.jwtPayloadConfig = software.amazon.jsii.Kernel.get(this, "jwtPayloadConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.jwtTokenConfig = software.amazon.jsii.Kernel.get(this, "jwtTokenConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.secretType = software.amazon.jsii.Kernel.get(this, "secretType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.jwks = builder.jwks;
                this.jwtPayloadConfig = builder.jwtPayloadConfig;
                this.jwtTokenConfig = builder.jwtTokenConfig;
                this.secretType = builder.secretType;
                this.type = builder.type;
            }

            @Override
            public final java.lang.Object getJwks() {
                return this.jwks;
            }

            @Override
            public final java.lang.Object getJwtPayloadConfig() {
                return this.jwtPayloadConfig;
            }

            @Override
            public final java.lang.Object getJwtTokenConfig() {
                return this.jwtTokenConfig;
            }

            @Override
            public final java.lang.Object getSecretType() {
                return this.secretType;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getJwks() != null) {
                    data.set("jwks", om.valueToTree(this.getJwks()));
                }
                if (this.getJwtPayloadConfig() != null) {
                    data.set("jwtPayloadConfig", om.valueToTree(this.getJwtPayloadConfig()));
                }
                if (this.getJwtTokenConfig() != null) {
                    data.set("jwtTokenConfig", om.valueToTree(this.getJwtTokenConfig()));
                }
                if (this.getSecretType() != null) {
                    data.set("secretType", om.valueToTree(this.getSecretType()));
                }
                if (this.getType() != null) {
                    data.set("type", om.valueToTree(this.getType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosConsumer.JwtIdentityConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                JwtIdentityConfigProperty.Jsii$Proxy that = (JwtIdentityConfigProperty.Jsii$Proxy) o;

                if (this.jwks != null ? !this.jwks.equals(that.jwks) : that.jwks != null) return false;
                if (this.jwtPayloadConfig != null ? !this.jwtPayloadConfig.equals(that.jwtPayloadConfig) : that.jwtPayloadConfig != null) return false;
                if (this.jwtTokenConfig != null ? !this.jwtTokenConfig.equals(that.jwtTokenConfig) : that.jwtTokenConfig != null) return false;
                if (this.secretType != null ? !this.secretType.equals(that.secretType) : that.secretType != null) return false;
                return this.type != null ? this.type.equals(that.type) : that.type == null;
            }

            @Override
            public final int hashCode() {
                int result = this.jwks != null ? this.jwks.hashCode() : 0;
                result = 31 * result + (this.jwtPayloadConfig != null ? this.jwtPayloadConfig.hashCode() : 0);
                result = 31 * result + (this.jwtTokenConfig != null ? this.jwtTokenConfig.hashCode() : 0);
                result = 31 * result + (this.secretType != null ? this.secretType.hashCode() : 0);
                result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosConsumer.JwtPayloadConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(JwtPayloadConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface JwtPayloadConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPayloadKeyName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPayloadKeyValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link JwtPayloadConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link JwtPayloadConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<JwtPayloadConfigProperty> {
            java.lang.Object payloadKeyName;
            java.lang.Object payloadKeyValue;

            /**
             * Sets the value of {@link JwtPayloadConfigProperty#getPayloadKeyName}
             * @param payloadKeyName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payloadKeyName(java.lang.String payloadKeyName) {
                this.payloadKeyName = payloadKeyName;
                return this;
            }

            /**
             * Sets the value of {@link JwtPayloadConfigProperty#getPayloadKeyName}
             * @param payloadKeyName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payloadKeyName(com.aliyun.ros.cdk.core.IResolvable payloadKeyName) {
                this.payloadKeyName = payloadKeyName;
                return this;
            }

            /**
             * Sets the value of {@link JwtPayloadConfigProperty#getPayloadKeyValue}
             * @param payloadKeyValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payloadKeyValue(java.lang.String payloadKeyValue) {
                this.payloadKeyValue = payloadKeyValue;
                return this;
            }

            /**
             * Sets the value of {@link JwtPayloadConfigProperty#getPayloadKeyValue}
             * @param payloadKeyValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder payloadKeyValue(com.aliyun.ros.cdk.core.IResolvable payloadKeyValue) {
                this.payloadKeyValue = payloadKeyValue;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link JwtPayloadConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public JwtPayloadConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link JwtPayloadConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JwtPayloadConfigProperty {
            private final java.lang.Object payloadKeyName;
            private final java.lang.Object payloadKeyValue;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.payloadKeyName = software.amazon.jsii.Kernel.get(this, "payloadKeyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.payloadKeyValue = software.amazon.jsii.Kernel.get(this, "payloadKeyValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.payloadKeyName = builder.payloadKeyName;
                this.payloadKeyValue = builder.payloadKeyValue;
            }

            @Override
            public final java.lang.Object getPayloadKeyName() {
                return this.payloadKeyName;
            }

            @Override
            public final java.lang.Object getPayloadKeyValue() {
                return this.payloadKeyValue;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getPayloadKeyName() != null) {
                    data.set("payloadKeyName", om.valueToTree(this.getPayloadKeyName()));
                }
                if (this.getPayloadKeyValue() != null) {
                    data.set("payloadKeyValue", om.valueToTree(this.getPayloadKeyValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosConsumer.JwtPayloadConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                JwtPayloadConfigProperty.Jsii$Proxy that = (JwtPayloadConfigProperty.Jsii$Proxy) o;

                if (this.payloadKeyName != null ? !this.payloadKeyName.equals(that.payloadKeyName) : that.payloadKeyName != null) return false;
                return this.payloadKeyValue != null ? this.payloadKeyValue.equals(that.payloadKeyValue) : that.payloadKeyValue == null;
            }

            @Override
            public final int hashCode() {
                int result = this.payloadKeyName != null ? this.payloadKeyName.hashCode() : 0;
                result = 31 * result + (this.payloadKeyValue != null ? this.payloadKeyValue.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.RosConsumer.JwtTokenConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(JwtTokenConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface JwtTokenConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPass() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPosition() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPrefix() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link JwtTokenConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link JwtTokenConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<JwtTokenConfigProperty> {
            java.lang.Object key;
            java.lang.Object pass;
            java.lang.Object position;
            java.lang.Object prefix;

            /**
             * Sets the value of {@link JwtTokenConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link JwtTokenConfigProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link JwtTokenConfigProperty#getPass}
             * @param pass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pass(java.lang.Boolean pass) {
                this.pass = pass;
                return this;
            }

            /**
             * Sets the value of {@link JwtTokenConfigProperty#getPass}
             * @param pass the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder pass(com.aliyun.ros.cdk.core.IResolvable pass) {
                this.pass = pass;
                return this;
            }

            /**
             * Sets the value of {@link JwtTokenConfigProperty#getPosition}
             * @param position the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder position(java.lang.String position) {
                this.position = position;
                return this;
            }

            /**
             * Sets the value of {@link JwtTokenConfigProperty#getPosition}
             * @param position the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder position(com.aliyun.ros.cdk.core.IResolvable position) {
                this.position = position;
                return this;
            }

            /**
             * Sets the value of {@link JwtTokenConfigProperty#getPrefix}
             * @param prefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(java.lang.String prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Sets the value of {@link JwtTokenConfigProperty#getPrefix}
             * @param prefix the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder prefix(com.aliyun.ros.cdk.core.IResolvable prefix) {
                this.prefix = prefix;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link JwtTokenConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public JwtTokenConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link JwtTokenConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements JwtTokenConfigProperty {
            private final java.lang.Object key;
            private final java.lang.Object pass;
            private final java.lang.Object position;
            private final java.lang.Object prefix;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.pass = software.amazon.jsii.Kernel.get(this, "pass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.position = software.amazon.jsii.Kernel.get(this, "position", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.prefix = software.amazon.jsii.Kernel.get(this, "prefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.pass = builder.pass;
                this.position = builder.position;
                this.prefix = builder.prefix;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getPass() {
                return this.pass;
            }

            @Override
            public final java.lang.Object getPosition() {
                return this.position;
            }

            @Override
            public final java.lang.Object getPrefix() {
                return this.prefix;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getPass() != null) {
                    data.set("pass", om.valueToTree(this.getPass()));
                }
                if (this.getPosition() != null) {
                    data.set("position", om.valueToTree(this.getPosition()));
                }
                if (this.getPrefix() != null) {
                    data.set("prefix", om.valueToTree(this.getPrefix()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.RosConsumer.JwtTokenConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                JwtTokenConfigProperty.Jsii$Proxy that = (JwtTokenConfigProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                if (this.pass != null ? !this.pass.equals(that.pass) : that.pass != null) return false;
                if (this.position != null ? !this.position.equals(that.position) : that.position != null) return false;
                return this.prefix != null ? this.prefix.equals(that.prefix) : that.prefix == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.pass != null ? this.pass.hashCode() : 0);
                result = 31 * result + (this.position != null ? this.position.hashCode() : 0);
                result = 31 * result + (this.prefix != null ? this.prefix.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.RosConsumer}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.RosConsumer> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.apig.RosConsumerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.RosConsumerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param akSkIdentityConfigs This parameter is required.
         */
        public Builder akSkIdentityConfigs(final com.aliyun.ros.cdk.core.IResolvable akSkIdentityConfigs) {
            this.props.akSkIdentityConfigs(akSkIdentityConfigs);
            return this;
        }
        /**
         * @return {@code this}
         * @param akSkIdentityConfigs This parameter is required.
         */
        public Builder akSkIdentityConfigs(final java.util.List<? extends java.lang.Object> akSkIdentityConfigs) {
            this.props.akSkIdentityConfigs(akSkIdentityConfigs);
            return this;
        }

        /**
         * @return {@code this}
         * @param apikeyIdentityConfig This parameter is required.
         */
        public Builder apikeyIdentityConfig(final com.aliyun.ros.cdk.core.IResolvable apikeyIdentityConfig) {
            this.props.apikeyIdentityConfig(apikeyIdentityConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param apikeyIdentityConfig This parameter is required.
         */
        public Builder apikeyIdentityConfig(final com.aliyun.ros.cdk.apig.RosConsumer.ApikeyIdentityConfigProperty apikeyIdentityConfig) {
            this.props.apikeyIdentityConfig(apikeyIdentityConfig);
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
         * @param enable This parameter is required.
         */
        public Builder enable(final java.lang.Boolean enable) {
            this.props.enable(enable);
            return this;
        }
        /**
         * @return {@code this}
         * @param enable This parameter is required.
         */
        public Builder enable(final com.aliyun.ros.cdk.core.IResolvable enable) {
            this.props.enable(enable);
            return this;
        }

        /**
         * @return {@code this}
         * @param gatewayType This parameter is required.
         */
        public Builder gatewayType(final java.lang.String gatewayType) {
            this.props.gatewayType(gatewayType);
            return this;
        }
        /**
         * @return {@code this}
         * @param gatewayType This parameter is required.
         */
        public Builder gatewayType(final com.aliyun.ros.cdk.core.IResolvable gatewayType) {
            this.props.gatewayType(gatewayType);
            return this;
        }

        /**
         * @return {@code this}
         * @param jwtIdentityConfig This parameter is required.
         */
        public Builder jwtIdentityConfig(final com.aliyun.ros.cdk.core.IResolvable jwtIdentityConfig) {
            this.props.jwtIdentityConfig(jwtIdentityConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param jwtIdentityConfig This parameter is required.
         */
        public Builder jwtIdentityConfig(final com.aliyun.ros.cdk.apig.RosConsumer.JwtIdentityConfigProperty jwtIdentityConfig) {
            this.props.jwtIdentityConfig(jwtIdentityConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.RosConsumer}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.RosConsumer build() {
            return new com.aliyun.ros.cdk.apig.RosConsumer(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
