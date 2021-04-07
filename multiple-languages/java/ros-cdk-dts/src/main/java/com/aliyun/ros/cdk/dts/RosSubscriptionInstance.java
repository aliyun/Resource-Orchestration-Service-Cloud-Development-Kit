package com.aliyun.ros.cdk.dts;

/**
 * A ROS template type:  `ALIYUN::DTS::SubscriptionInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.106Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSubscriptionInstance")
public class RosSubscriptionInstance extends com.aliyun.ros.cdk.core.RosResource {

    protected RosSubscriptionInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosSubscriptionInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dts.RosSubscriptionInstance.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::DTS::SubscriptionInstance`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosSubscriptionInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dts.RosSubscriptionInstanceProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPrivateHost() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPublicHost() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSubscriptionInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrSubscriptionInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVpcHost() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcHost", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "configuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "configuration", value);
    }

    /**
     */
    public void setConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dts.RosSubscriptionInstance.ConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "configuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceEndpointInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "sourceEndpointInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceEndpointInstanceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceEndpointInstanceType", value);
    }

    /**
     */
    public void setSourceEndpointInstanceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceEndpointInstanceType", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSubscriptionInstance.ConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSourceEndpoint();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSubscriptionDataType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getSubscriptionObject();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSubscriptionInstance() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSubscriptionInstanceName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSubscriptionInstanceNetworkType() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigurationProperty> {
            private java.lang.Object sourceEndpoint;
            private java.lang.Object subscriptionDataType;
            private java.lang.Object subscriptionObject;
            private java.lang.Object subscriptionInstance;
            private java.lang.Object subscriptionInstanceName;
            private java.lang.Object subscriptionInstanceNetworkType;

            /**
             * Sets the value of {@link ConfigurationProperty#getSourceEndpoint}
             * @param sourceEndpoint the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceEndpoint(com.aliyun.ros.cdk.core.IResolvable sourceEndpoint) {
                this.sourceEndpoint = sourceEndpoint;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSourceEndpoint}
             * @param sourceEndpoint the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder sourceEndpoint(com.aliyun.ros.cdk.dts.RosSubscriptionInstance.SourceEndpointProperty sourceEndpoint) {
                this.sourceEndpoint = sourceEndpoint;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSubscriptionDataType}
             * @param subscriptionDataType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subscriptionDataType(com.aliyun.ros.cdk.core.IResolvable subscriptionDataType) {
                this.subscriptionDataType = subscriptionDataType;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSubscriptionDataType}
             * @param subscriptionDataType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subscriptionDataType(com.aliyun.ros.cdk.dts.RosSubscriptionInstance.SubscriptionDataTypeProperty subscriptionDataType) {
                this.subscriptionDataType = subscriptionDataType;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSubscriptionObject}
             * @param subscriptionObject the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subscriptionObject(com.aliyun.ros.cdk.core.IResolvable subscriptionObject) {
                this.subscriptionObject = subscriptionObject;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSubscriptionObject}
             * @param subscriptionObject the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subscriptionObject(java.util.List<? extends java.lang.Object> subscriptionObject) {
                this.subscriptionObject = subscriptionObject;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSubscriptionInstance}
             * @param subscriptionInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subscriptionInstance(com.aliyun.ros.cdk.core.IResolvable subscriptionInstance) {
                this.subscriptionInstance = subscriptionInstance;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSubscriptionInstance}
             * @param subscriptionInstance the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subscriptionInstance(com.aliyun.ros.cdk.dts.RosSubscriptionInstance.SubscriptionInstanceProperty subscriptionInstance) {
                this.subscriptionInstance = subscriptionInstance;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSubscriptionInstanceName}
             * @param subscriptionInstanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subscriptionInstanceName(java.lang.String subscriptionInstanceName) {
                this.subscriptionInstanceName = subscriptionInstanceName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSubscriptionInstanceName}
             * @param subscriptionInstanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subscriptionInstanceName(com.aliyun.ros.cdk.core.IResolvable subscriptionInstanceName) {
                this.subscriptionInstanceName = subscriptionInstanceName;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSubscriptionInstanceNetworkType}
             * @param subscriptionInstanceNetworkType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subscriptionInstanceNetworkType(java.lang.String subscriptionInstanceNetworkType) {
                this.subscriptionInstanceNetworkType = subscriptionInstanceNetworkType;
                return this;
            }

            /**
             * Sets the value of {@link ConfigurationProperty#getSubscriptionInstanceNetworkType}
             * @param subscriptionInstanceNetworkType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subscriptionInstanceNetworkType(com.aliyun.ros.cdk.core.IResolvable subscriptionInstanceNetworkType) {
                this.subscriptionInstanceNetworkType = subscriptionInstanceNetworkType;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigurationProperty build() {
                return new Jsii$Proxy(sourceEndpoint, subscriptionDataType, subscriptionObject, subscriptionInstance, subscriptionInstanceName, subscriptionInstanceNetworkType);
            }
        }

        /**
         * An implementation for {@link ConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigurationProperty {
            private final java.lang.Object sourceEndpoint;
            private final java.lang.Object subscriptionDataType;
            private final java.lang.Object subscriptionObject;
            private final java.lang.Object subscriptionInstance;
            private final java.lang.Object subscriptionInstanceName;
            private final java.lang.Object subscriptionInstanceNetworkType;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.sourceEndpoint = software.amazon.jsii.Kernel.get(this, "sourceEndpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subscriptionDataType = software.amazon.jsii.Kernel.get(this, "subscriptionDataType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subscriptionObject = software.amazon.jsii.Kernel.get(this, "subscriptionObject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subscriptionInstance = software.amazon.jsii.Kernel.get(this, "subscriptionInstance", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subscriptionInstanceName = software.amazon.jsii.Kernel.get(this, "subscriptionInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subscriptionInstanceNetworkType = software.amazon.jsii.Kernel.get(this, "subscriptionInstanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object sourceEndpoint, final java.lang.Object subscriptionDataType, final java.lang.Object subscriptionObject, final java.lang.Object subscriptionInstance, final java.lang.Object subscriptionInstanceName, final java.lang.Object subscriptionInstanceNetworkType) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.sourceEndpoint = java.util.Objects.requireNonNull(sourceEndpoint, "sourceEndpoint is required");
                this.subscriptionDataType = java.util.Objects.requireNonNull(subscriptionDataType, "subscriptionDataType is required");
                this.subscriptionObject = java.util.Objects.requireNonNull(subscriptionObject, "subscriptionObject is required");
                this.subscriptionInstance = subscriptionInstance;
                this.subscriptionInstanceName = subscriptionInstanceName;
                this.subscriptionInstanceNetworkType = subscriptionInstanceNetworkType;
            }

            @Override
            public final java.lang.Object getSourceEndpoint() {
                return this.sourceEndpoint;
            }

            @Override
            public final java.lang.Object getSubscriptionDataType() {
                return this.subscriptionDataType;
            }

            @Override
            public final java.lang.Object getSubscriptionObject() {
                return this.subscriptionObject;
            }

            @Override
            public final java.lang.Object getSubscriptionInstance() {
                return this.subscriptionInstance;
            }

            @Override
            public final java.lang.Object getSubscriptionInstanceName() {
                return this.subscriptionInstanceName;
            }

            @Override
            public final java.lang.Object getSubscriptionInstanceNetworkType() {
                return this.subscriptionInstanceNetworkType;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("sourceEndpoint", om.valueToTree(this.getSourceEndpoint()));
                data.set("subscriptionDataType", om.valueToTree(this.getSubscriptionDataType()));
                data.set("subscriptionObject", om.valueToTree(this.getSubscriptionObject()));
                if (this.getSubscriptionInstance() != null) {
                    data.set("subscriptionInstance", om.valueToTree(this.getSubscriptionInstance()));
                }
                if (this.getSubscriptionInstanceName() != null) {
                    data.set("subscriptionInstanceName", om.valueToTree(this.getSubscriptionInstanceName()));
                }
                if (this.getSubscriptionInstanceNetworkType() != null) {
                    data.set("subscriptionInstanceNetworkType", om.valueToTree(this.getSubscriptionInstanceNetworkType()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSubscriptionInstance.ConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigurationProperty.Jsii$Proxy that = (ConfigurationProperty.Jsii$Proxy) o;

                if (!sourceEndpoint.equals(that.sourceEndpoint)) return false;
                if (!subscriptionDataType.equals(that.subscriptionDataType)) return false;
                if (!subscriptionObject.equals(that.subscriptionObject)) return false;
                if (this.subscriptionInstance != null ? !this.subscriptionInstance.equals(that.subscriptionInstance) : that.subscriptionInstance != null) return false;
                if (this.subscriptionInstanceName != null ? !this.subscriptionInstanceName.equals(that.subscriptionInstanceName) : that.subscriptionInstanceName != null) return false;
                return this.subscriptionInstanceNetworkType != null ? this.subscriptionInstanceNetworkType.equals(that.subscriptionInstanceNetworkType) : that.subscriptionInstanceNetworkType == null;
            }

            @Override
            public final int hashCode() {
                int result = this.sourceEndpoint.hashCode();
                result = 31 * result + (this.subscriptionDataType.hashCode());
                result = 31 * result + (this.subscriptionObject.hashCode());
                result = 31 * result + (this.subscriptionInstance != null ? this.subscriptionInstance.hashCode() : 0);
                result = 31 * result + (this.subscriptionInstanceName != null ? this.subscriptionInstanceName.hashCode() : 0);
                result = 31 * result + (this.subscriptionInstanceNetworkType != null ? this.subscriptionInstanceNetworkType.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSubscriptionInstance.SourceEndpointProperty")
    @software.amazon.jsii.Jsii.Proxy(SourceEndpointProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SourceEndpointProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDatabaseName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOracleSid() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getOwnerId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRole() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SourceEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SourceEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SourceEndpointProperty> {
            private java.lang.Object instanceType;
            private java.lang.Object password;
            private java.lang.Object userName;
            private java.lang.Object databaseName;
            private java.lang.Object instanceId;
            private java.lang.Object ip;
            private java.lang.Object oracleSid;
            private java.lang.Object ownerId;
            private java.lang.Object port;
            private java.lang.Object role;

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(java.lang.String instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceType}
             * @param instanceType the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
                this.instanceType = instanceType;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getUserName}
             * @param userName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getUserName}
             * @param userName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getDatabaseName}
             * @param databaseName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder databaseName(java.lang.String databaseName) {
                this.databaseName = databaseName;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getDatabaseName}
             * @param databaseName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder databaseName(com.aliyun.ros.cdk.core.IResolvable databaseName) {
                this.databaseName = databaseName;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getInstanceId}
             * @param instanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(java.lang.String ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(com.aliyun.ros.cdk.core.IResolvable ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getOracleSid}
             * @param oracleSid the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oracleSid(java.lang.String oracleSid) {
                this.oracleSid = oracleSid;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getOracleSid}
             * @param oracleSid the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder oracleSid(com.aliyun.ros.cdk.core.IResolvable oracleSid) {
                this.oracleSid = oracleSid;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getOwnerId}
             * @param ownerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ownerId(java.lang.String ownerId) {
                this.ownerId = ownerId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getOwnerId}
             * @param ownerId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ownerId(com.aliyun.ros.cdk.core.IResolvable ownerId) {
                this.ownerId = ownerId;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.String port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getRole}
             * @param role the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder role(java.lang.String role) {
                this.role = role;
                return this;
            }

            /**
             * Sets the value of {@link SourceEndpointProperty#getRole}
             * @param role the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder role(com.aliyun.ros.cdk.core.IResolvable role) {
                this.role = role;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SourceEndpointProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SourceEndpointProperty build() {
                return new Jsii$Proxy(instanceType, password, userName, databaseName, instanceId, ip, oracleSid, ownerId, port, role);
            }
        }

        /**
         * An implementation for {@link SourceEndpointProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SourceEndpointProperty {
            private final java.lang.Object instanceType;
            private final java.lang.Object password;
            private final java.lang.Object userName;
            private final java.lang.Object databaseName;
            private final java.lang.Object instanceId;
            private final java.lang.Object ip;
            private final java.lang.Object oracleSid;
            private final java.lang.Object ownerId;
            private final java.lang.Object port;
            private final java.lang.Object role;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.databaseName = software.amazon.jsii.Kernel.get(this, "databaseName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ip = software.amazon.jsii.Kernel.get(this, "ip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.oracleSid = software.amazon.jsii.Kernel.get(this, "oracleSid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ownerId = software.amazon.jsii.Kernel.get(this, "ownerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.role = software.amazon.jsii.Kernel.get(this, "role", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object instanceType, final java.lang.Object password, final java.lang.Object userName, final java.lang.Object databaseName, final java.lang.Object instanceId, final java.lang.Object ip, final java.lang.Object oracleSid, final java.lang.Object ownerId, final java.lang.Object port, final java.lang.Object role) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceType = java.util.Objects.requireNonNull(instanceType, "instanceType is required");
                this.password = java.util.Objects.requireNonNull(password, "password is required");
                this.userName = java.util.Objects.requireNonNull(userName, "userName is required");
                this.databaseName = databaseName;
                this.instanceId = instanceId;
                this.ip = ip;
                this.oracleSid = oracleSid;
                this.ownerId = ownerId;
                this.port = port;
                this.role = role;
            }

            @Override
            public final java.lang.Object getInstanceType() {
                return this.instanceType;
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getUserName() {
                return this.userName;
            }

            @Override
            public final java.lang.Object getDatabaseName() {
                return this.databaseName;
            }

            @Override
            public final java.lang.Object getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.Object getIp() {
                return this.ip;
            }

            @Override
            public final java.lang.Object getOracleSid() {
                return this.oracleSid;
            }

            @Override
            public final java.lang.Object getOwnerId() {
                return this.ownerId;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getRole() {
                return this.role;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceType", om.valueToTree(this.getInstanceType()));
                data.set("password", om.valueToTree(this.getPassword()));
                data.set("userName", om.valueToTree(this.getUserName()));
                if (this.getDatabaseName() != null) {
                    data.set("databaseName", om.valueToTree(this.getDatabaseName()));
                }
                if (this.getInstanceId() != null) {
                    data.set("instanceId", om.valueToTree(this.getInstanceId()));
                }
                if (this.getIp() != null) {
                    data.set("ip", om.valueToTree(this.getIp()));
                }
                if (this.getOracleSid() != null) {
                    data.set("oracleSid", om.valueToTree(this.getOracleSid()));
                }
                if (this.getOwnerId() != null) {
                    data.set("ownerId", om.valueToTree(this.getOwnerId()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getRole() != null) {
                    data.set("role", om.valueToTree(this.getRole()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSubscriptionInstance.SourceEndpointProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SourceEndpointProperty.Jsii$Proxy that = (SourceEndpointProperty.Jsii$Proxy) o;

                if (!instanceType.equals(that.instanceType)) return false;
                if (!password.equals(that.password)) return false;
                if (!userName.equals(that.userName)) return false;
                if (this.databaseName != null ? !this.databaseName.equals(that.databaseName) : that.databaseName != null) return false;
                if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
                if (this.ip != null ? !this.ip.equals(that.ip) : that.ip != null) return false;
                if (this.oracleSid != null ? !this.oracleSid.equals(that.oracleSid) : that.oracleSid != null) return false;
                if (this.ownerId != null ? !this.ownerId.equals(that.ownerId) : that.ownerId != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                return this.role != null ? this.role.equals(that.role) : that.role == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceType.hashCode();
                result = 31 * result + (this.password.hashCode());
                result = 31 * result + (this.userName.hashCode());
                result = 31 * result + (this.databaseName != null ? this.databaseName.hashCode() : 0);
                result = 31 * result + (this.instanceId != null ? this.instanceId.hashCode() : 0);
                result = 31 * result + (this.ip != null ? this.ip.hashCode() : 0);
                result = 31 * result + (this.oracleSid != null ? this.oracleSid.hashCode() : 0);
                result = 31 * result + (this.ownerId != null ? this.ownerId.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.role != null ? this.role.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSubscriptionInstance.SubscriptionDataTypeProperty")
    @software.amazon.jsii.Jsii.Proxy(SubscriptionDataTypeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SubscriptionDataTypeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDdl();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getDml();

        /**
         * @return a {@link Builder} of {@link SubscriptionDataTypeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SubscriptionDataTypeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SubscriptionDataTypeProperty> {
            private java.lang.Object ddl;
            private java.lang.Object dml;

            /**
             * Sets the value of {@link SubscriptionDataTypeProperty#getDdl}
             * @param ddl the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddl(java.lang.Boolean ddl) {
                this.ddl = ddl;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionDataTypeProperty#getDdl}
             * @param ddl the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ddl(com.aliyun.ros.cdk.core.IResolvable ddl) {
                this.ddl = ddl;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionDataTypeProperty#getDml}
             * @param dml the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dml(java.lang.Boolean dml) {
                this.dml = dml;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionDataTypeProperty#getDml}
             * @param dml the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dml(com.aliyun.ros.cdk.core.IResolvable dml) {
                this.dml = dml;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SubscriptionDataTypeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SubscriptionDataTypeProperty build() {
                return new Jsii$Proxy(ddl, dml);
            }
        }

        /**
         * An implementation for {@link SubscriptionDataTypeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubscriptionDataTypeProperty {
            private final java.lang.Object ddl;
            private final java.lang.Object dml;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ddl = software.amazon.jsii.Kernel.get(this, "ddl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.dml = software.amazon.jsii.Kernel.get(this, "dml", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object ddl, final java.lang.Object dml) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ddl = java.util.Objects.requireNonNull(ddl, "ddl is required");
                this.dml = java.util.Objects.requireNonNull(dml, "dml is required");
            }

            @Override
            public final java.lang.Object getDdl() {
                return this.ddl;
            }

            @Override
            public final java.lang.Object getDml() {
                return this.dml;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ddl", om.valueToTree(this.getDdl()));
                data.set("dml", om.valueToTree(this.getDml()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSubscriptionInstance.SubscriptionDataTypeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SubscriptionDataTypeProperty.Jsii$Proxy that = (SubscriptionDataTypeProperty.Jsii$Proxy) o;

                if (!ddl.equals(that.ddl)) return false;
                return this.dml.equals(that.dml);
            }

            @Override
            public final int hashCode() {
                int result = this.ddl.hashCode();
                result = 31 * result + (this.dml.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSubscriptionInstance.SubscriptionInstanceProperty")
    @software.amazon.jsii.Jsii.Proxy(SubscriptionInstanceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SubscriptionInstanceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

        /**
         * @return a {@link Builder} of {@link SubscriptionInstanceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SubscriptionInstanceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SubscriptionInstanceProperty> {
            private java.lang.Object vpcId;
            private java.lang.Object vSwitchId;

            /**
             * Sets the value of {@link SubscriptionInstanceProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(java.lang.String vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionInstanceProperty#getVpcId}
             * @param vpcId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
                this.vpcId = vpcId;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionInstanceProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(java.lang.String vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionInstanceProperty#getVSwitchId}
             * @param vSwitchId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
                this.vSwitchId = vSwitchId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SubscriptionInstanceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SubscriptionInstanceProperty build() {
                return new Jsii$Proxy(vpcId, vSwitchId);
            }
        }

        /**
         * An implementation for {@link SubscriptionInstanceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubscriptionInstanceProperty {
            private final java.lang.Object vpcId;
            private final java.lang.Object vSwitchId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object vpcId, final java.lang.Object vSwitchId) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.vpcId = java.util.Objects.requireNonNull(vpcId, "vpcId is required");
                this.vSwitchId = java.util.Objects.requireNonNull(vSwitchId, "vSwitchId is required");
            }

            @Override
            public final java.lang.Object getVpcId() {
                return this.vpcId;
            }

            @Override
            public final java.lang.Object getVSwitchId() {
                return this.vSwitchId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("vpcId", om.valueToTree(this.getVpcId()));
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSubscriptionInstance.SubscriptionInstanceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SubscriptionInstanceProperty.Jsii$Proxy that = (SubscriptionInstanceProperty.Jsii$Proxy) o;

                if (!vpcId.equals(that.vpcId)) return false;
                return this.vSwitchId.equals(that.vSwitchId);
            }

            @Override
            public final int hashCode() {
                int result = this.vpcId.hashCode();
                result = 31 * result + (this.vSwitchId.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSubscriptionInstance.SubscriptionObjectProperty")
    @software.amazon.jsii.Jsii.Proxy(SubscriptionObjectProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SubscriptionObjectProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDbName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTableExcludes() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTableIncludes() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SubscriptionObjectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SubscriptionObjectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SubscriptionObjectProperty> {
            private java.lang.Object dbName;
            private java.lang.Object tableExcludes;
            private java.lang.Object tableIncludes;

            /**
             * Sets the value of {@link SubscriptionObjectProperty#getDbName}
             * @param dbName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbName(java.lang.String dbName) {
                this.dbName = dbName;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionObjectProperty#getDbName}
             * @param dbName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder dbName(com.aliyun.ros.cdk.core.IResolvable dbName) {
                this.dbName = dbName;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionObjectProperty#getTableExcludes}
             * @param tableExcludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableExcludes(com.aliyun.ros.cdk.core.IResolvable tableExcludes) {
                this.tableExcludes = tableExcludes;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionObjectProperty#getTableExcludes}
             * @param tableExcludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableExcludes(java.util.List<? extends java.lang.Object> tableExcludes) {
                this.tableExcludes = tableExcludes;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionObjectProperty#getTableIncludes}
             * @param tableIncludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableIncludes(com.aliyun.ros.cdk.core.IResolvable tableIncludes) {
                this.tableIncludes = tableIncludes;
                return this;
            }

            /**
             * Sets the value of {@link SubscriptionObjectProperty#getTableIncludes}
             * @param tableIncludes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableIncludes(java.util.List<? extends java.lang.Object> tableIncludes) {
                this.tableIncludes = tableIncludes;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SubscriptionObjectProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SubscriptionObjectProperty build() {
                return new Jsii$Proxy(dbName, tableExcludes, tableIncludes);
            }
        }

        /**
         * An implementation for {@link SubscriptionObjectProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SubscriptionObjectProperty {
            private final java.lang.Object dbName;
            private final java.lang.Object tableExcludes;
            private final java.lang.Object tableIncludes;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.dbName = software.amazon.jsii.Kernel.get(this, "dbName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tableExcludes = software.amazon.jsii.Kernel.get(this, "tableExcludes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tableIncludes = software.amazon.jsii.Kernel.get(this, "tableIncludes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object dbName, final java.lang.Object tableExcludes, final java.lang.Object tableIncludes) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.dbName = dbName;
                this.tableExcludes = tableExcludes;
                this.tableIncludes = tableIncludes;
            }

            @Override
            public final java.lang.Object getDbName() {
                return this.dbName;
            }

            @Override
            public final java.lang.Object getTableExcludes() {
                return this.tableExcludes;
            }

            @Override
            public final java.lang.Object getTableIncludes() {
                return this.tableIncludes;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDbName() != null) {
                    data.set("dbName", om.valueToTree(this.getDbName()));
                }
                if (this.getTableExcludes() != null) {
                    data.set("tableExcludes", om.valueToTree(this.getTableExcludes()));
                }
                if (this.getTableIncludes() != null) {
                    data.set("tableIncludes", om.valueToTree(this.getTableIncludes()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSubscriptionInstance.SubscriptionObjectProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SubscriptionObjectProperty.Jsii$Proxy that = (SubscriptionObjectProperty.Jsii$Proxy) o;

                if (this.dbName != null ? !this.dbName.equals(that.dbName) : that.dbName != null) return false;
                if (this.tableExcludes != null ? !this.tableExcludes.equals(that.tableExcludes) : that.tableExcludes != null) return false;
                return this.tableIncludes != null ? this.tableIncludes.equals(that.tableIncludes) : that.tableIncludes == null;
            }

            @Override
            public final int hashCode() {
                int result = this.dbName != null ? this.dbName.hashCode() : 0;
                result = 31 * result + (this.tableExcludes != null ? this.tableExcludes.hashCode() : 0);
                result = 31 * result + (this.tableIncludes != null ? this.tableIncludes.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSubscriptionInstance.TableExcludesProperty")
    @software.amazon.jsii.Jsii.Proxy(TableExcludesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TableExcludesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTableName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TableExcludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TableExcludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TableExcludesProperty> {
            private java.lang.Object tableName;

            /**
             * Sets the value of {@link TableExcludesProperty#getTableName}
             * @param tableName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableName(java.lang.String tableName) {
                this.tableName = tableName;
                return this;
            }

            /**
             * Sets the value of {@link TableExcludesProperty#getTableName}
             * @param tableName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableName(com.aliyun.ros.cdk.core.IResolvable tableName) {
                this.tableName = tableName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TableExcludesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TableExcludesProperty build() {
                return new Jsii$Proxy(tableName);
            }
        }

        /**
         * An implementation for {@link TableExcludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TableExcludesProperty {
            private final java.lang.Object tableName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.tableName = software.amazon.jsii.Kernel.get(this, "tableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object tableName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.tableName = tableName;
            }

            @Override
            public final java.lang.Object getTableName() {
                return this.tableName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getTableName() != null) {
                    data.set("tableName", om.valueToTree(this.getTableName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSubscriptionInstance.TableExcludesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TableExcludesProperty.Jsii$Proxy that = (TableExcludesProperty.Jsii$Proxy) o;

                return this.tableName != null ? this.tableName.equals(that.tableName) : that.tableName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.tableName != null ? this.tableName.hashCode() : 0;
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dts.$Module.class, fqn = "@alicloud/ros-cdk-dts.RosSubscriptionInstance.TableIncludesProperty")
    @software.amazon.jsii.Jsii.Proxy(TableIncludesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TableIncludesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTableName() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TableIncludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TableIncludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TableIncludesProperty> {
            private java.lang.Object tableName;

            /**
             * Sets the value of {@link TableIncludesProperty#getTableName}
             * @param tableName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableName(java.lang.String tableName) {
                this.tableName = tableName;
                return this;
            }

            /**
             * Sets the value of {@link TableIncludesProperty#getTableName}
             * @param tableName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tableName(com.aliyun.ros.cdk.core.IResolvable tableName) {
                this.tableName = tableName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TableIncludesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TableIncludesProperty build() {
                return new Jsii$Proxy(tableName);
            }
        }

        /**
         * An implementation for {@link TableIncludesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TableIncludesProperty {
            private final java.lang.Object tableName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.tableName = software.amazon.jsii.Kernel.get(this, "tableName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.Object tableName) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.tableName = tableName;
            }

            @Override
            public final java.lang.Object getTableName() {
                return this.tableName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getTableName() != null) {
                    data.set("tableName", om.valueToTree(this.getTableName()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dts.RosSubscriptionInstance.TableIncludesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TableIncludesProperty.Jsii$Proxy that = (TableIncludesProperty.Jsii$Proxy) o;

                return this.tableName != null ? this.tableName.equals(that.tableName) : that.tableName == null;
            }

            @Override
            public final int hashCode() {
                int result = this.tableName != null ? this.tableName.hashCode() : 0;
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dts.RosSubscriptionInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dts.RosSubscriptionInstance> {
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
        private final com.aliyun.ros.cdk.dts.RosSubscriptionInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dts.RosSubscriptionInstanceProps.Builder();
        }

        /**
         * @return {@code this}
         * @param configuration This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.props.configuration(configuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param configuration This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.dts.RosSubscriptionInstance.ConfigurationProperty configuration) {
            this.props.configuration(configuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceEndpointInstanceType This parameter is required.
         */
        public Builder sourceEndpointInstanceType(final java.lang.String sourceEndpointInstanceType) {
            this.props.sourceEndpointInstanceType(sourceEndpointInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceEndpointInstanceType This parameter is required.
         */
        public Builder sourceEndpointInstanceType(final com.aliyun.ros.cdk.core.IResolvable sourceEndpointInstanceType) {
            this.props.sourceEndpointInstanceType(sourceEndpointInstanceType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dts.RosSubscriptionInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.dts.RosSubscriptionInstance build() {
            return new com.aliyun.ros.cdk.dts.RosSubscriptionInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
