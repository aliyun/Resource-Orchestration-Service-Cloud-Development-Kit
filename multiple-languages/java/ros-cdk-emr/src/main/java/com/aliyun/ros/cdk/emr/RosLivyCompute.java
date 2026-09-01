package com.aliyun.ros.cdk.emr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EMR::LivyCompute</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T08:59:08.320Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosLivyCompute")
public class RosLivyCompute extends com.aliyun.ros.cdk.core.RosResource {

    protected RosLivyCompute(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosLivyCompute(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.emr.RosLivyCompute.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosLivyCompute(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.RosLivyComputeProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpoint() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpoint", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrEndpointInner() {
        return software.amazon.jsii.Kernel.get(this, "attrEndpointInner", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLivyComputeId() {
        return software.amazon.jsii.Kernel.get(this, "attrLivyComputeId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrStatus() {
        return software.amazon.jsii.Kernel.get(this, "attrStatus", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAuthType() {
        return software.amazon.jsii.Kernel.get(this, "authType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAuthType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "authType", java.util.Objects.requireNonNull(value, "authType is required"));
    }

    /**
     */
    public void setAuthType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "authType", java.util.Objects.requireNonNull(value, "authType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCpuLimit() {
        return software.amazon.jsii.Kernel.get(this, "cpuLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpuLimit(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "cpuLimit", java.util.Objects.requireNonNull(value, "cpuLimit is required"));
    }

    /**
     */
    public void setCpuLimit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpuLimit", java.util.Objects.requireNonNull(value, "cpuLimit is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDisplayReleaseVersion() {
        return software.amazon.jsii.Kernel.get(this, "displayReleaseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDisplayReleaseVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "displayReleaseVersion", java.util.Objects.requireNonNull(value, "displayReleaseVersion is required"));
    }

    /**
     */
    public void setDisplayReleaseVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "displayReleaseVersion", java.util.Objects.requireNonNull(value, "displayReleaseVersion is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLivyVersion() {
        return software.amazon.jsii.Kernel.get(this, "livyVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLivyVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "livyVersion", java.util.Objects.requireNonNull(value, "livyVersion is required"));
    }

    /**
     */
    public void setLivyVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "livyVersion", java.util.Objects.requireNonNull(value, "livyVersion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getMemoryLimit() {
        return software.amazon.jsii.Kernel.get(this, "memoryLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMemoryLimit(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "memoryLimit", java.util.Objects.requireNonNull(value, "memoryLimit is required"));
    }

    /**
     */
    public void setMemoryLimit(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "memoryLimit", java.util.Objects.requireNonNull(value, "memoryLimit is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getQueueName() {
        return software.amazon.jsii.Kernel.get(this, "queueName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setQueueName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "queueName", java.util.Objects.requireNonNull(value, "queueName is required"));
    }

    /**
     */
    public void setQueueName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "queueName", java.util.Objects.requireNonNull(value, "queueName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getWorkspaceBizId() {
        return software.amazon.jsii.Kernel.get(this, "workspaceBizId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWorkspaceBizId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "workspaceBizId", java.util.Objects.requireNonNull(value, "workspaceBizId is required"));
    }

    /**
     */
    public void setWorkspaceBizId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "workspaceBizId", java.util.Objects.requireNonNull(value, "workspaceBizId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoStartConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "autoStartConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoStartConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoStartConfiguration", value);
    }

    /**
     */
    public void setAutoStartConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.emr.RosLivyCompute.AutoStartConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "autoStartConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoStopConfiguration() {
        return software.amazon.jsii.Kernel.get(this, "autoStopConfiguration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoStopConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoStopConfiguration", value);
    }

    /**
     */
    public void setAutoStopConfiguration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.emr.RosLivyCompute.AutoStopConfigurationProperty value) {
        software.amazon.jsii.Kernel.set(this, "autoStopConfiguration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnablePublic() {
        return software.amazon.jsii.Kernel.get(this, "enablePublic", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnablePublic(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enablePublic", value);
    }

    /**
     */
    public void setEnablePublic(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enablePublic", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentId() {
        return software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvironmentId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "environmentId", value);
    }

    /**
     */
    public void setEnvironmentId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "environmentId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFusion() {
        return software.amazon.jsii.Kernel.get(this, "fusion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFusion(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "fusion", value);
    }

    /**
     */
    public void setFusion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "fusion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLivyServerConf() {
        return software.amazon.jsii.Kernel.get(this, "livyServerConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLivyServerConf(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "livyServerConf", value);
    }

    /**
     */
    public void setLivyServerConf(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "livyServerConf", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNetworkName() {
        return software.amazon.jsii.Kernel.get(this, "networkName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNetworkName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "networkName", value);
    }

    /**
     */
    public void setNetworkName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "networkName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReleaseVersion() {
        return software.amazon.jsii.Kernel.get(this, "releaseVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReleaseVersion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "releaseVersion", value);
    }

    /**
     */
    public void setReleaseVersion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "releaseVersion", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosLivyCompute.AutoStartConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(AutoStartConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AutoStartConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnable();

        /**
         * @return a {@link Builder} of {@link AutoStartConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AutoStartConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AutoStartConfigurationProperty> {
            java.lang.Object enable;

            /**
             * Sets the value of {@link AutoStartConfigurationProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link AutoStartConfigurationProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AutoStartConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AutoStartConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AutoStartConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AutoStartConfigurationProperty {
            private final java.lang.Object enable;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enable = java.util.Objects.requireNonNull(builder.enable, "enable is required");
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("enable", om.valueToTree(this.getEnable()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosLivyCompute.AutoStartConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AutoStartConfigurationProperty.Jsii$Proxy that = (AutoStartConfigurationProperty.Jsii$Proxy) o;

                return this.enable.equals(that.enable);
            }

            @Override
            public final int hashCode() {
                int result = this.enable.hashCode();
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosLivyCompute.AutoStopConfigurationProperty")
    @software.amazon.jsii.Jsii.Proxy(AutoStopConfigurationProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AutoStopConfigurationProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEnable();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIdleTimeoutMinutes() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AutoStopConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AutoStopConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AutoStopConfigurationProperty> {
            java.lang.Object enable;
            java.lang.Object idleTimeoutMinutes;

            /**
             * Sets the value of {@link AutoStopConfigurationProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(java.lang.Boolean enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link AutoStopConfigurationProperty#getEnable}
             * @param enable the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder enable(com.aliyun.ros.cdk.core.IResolvable enable) {
                this.enable = enable;
                return this;
            }

            /**
             * Sets the value of {@link AutoStopConfigurationProperty#getIdleTimeoutMinutes}
             * @param idleTimeoutMinutes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder idleTimeoutMinutes(java.lang.Number idleTimeoutMinutes) {
                this.idleTimeoutMinutes = idleTimeoutMinutes;
                return this;
            }

            /**
             * Sets the value of {@link AutoStopConfigurationProperty#getIdleTimeoutMinutes}
             * @param idleTimeoutMinutes the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder idleTimeoutMinutes(com.aliyun.ros.cdk.core.IResolvable idleTimeoutMinutes) {
                this.idleTimeoutMinutes = idleTimeoutMinutes;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AutoStopConfigurationProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AutoStopConfigurationProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AutoStopConfigurationProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AutoStopConfigurationProperty {
            private final java.lang.Object enable;
            private final java.lang.Object idleTimeoutMinutes;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.enable = software.amazon.jsii.Kernel.get(this, "enable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.idleTimeoutMinutes = software.amazon.jsii.Kernel.get(this, "idleTimeoutMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.enable = java.util.Objects.requireNonNull(builder.enable, "enable is required");
                this.idleTimeoutMinutes = builder.idleTimeoutMinutes;
            }

            @Override
            public final java.lang.Object getEnable() {
                return this.enable;
            }

            @Override
            public final java.lang.Object getIdleTimeoutMinutes() {
                return this.idleTimeoutMinutes;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("enable", om.valueToTree(this.getEnable()));
                if (this.getIdleTimeoutMinutes() != null) {
                    data.set("idleTimeoutMinutes", om.valueToTree(this.getIdleTimeoutMinutes()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosLivyCompute.AutoStopConfigurationProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AutoStopConfigurationProperty.Jsii$Proxy that = (AutoStopConfigurationProperty.Jsii$Proxy) o;

                if (!enable.equals(that.enable)) return false;
                return this.idleTimeoutMinutes != null ? this.idleTimeoutMinutes.equals(that.idleTimeoutMinutes) : that.idleTimeoutMinutes == null;
            }

            @Override
            public final int hashCode() {
                int result = this.enable.hashCode();
                result = 31 * result + (this.idleTimeoutMinutes != null ? this.idleTimeoutMinutes.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.RosLivyCompute}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.RosLivyCompute> {
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
        private final com.aliyun.ros.cdk.emr.RosLivyComputeProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.RosLivyComputeProps.Builder();
        }

        /**
         * @return {@code this}
         * @param authType This parameter is required.
         */
        public Builder authType(final java.lang.String authType) {
            this.props.authType(authType);
            return this;
        }
        /**
         * @return {@code this}
         * @param authType This parameter is required.
         */
        public Builder authType(final com.aliyun.ros.cdk.core.IResolvable authType) {
            this.props.authType(authType);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpuLimit This parameter is required.
         */
        public Builder cpuLimit(final java.lang.String cpuLimit) {
            this.props.cpuLimit(cpuLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param cpuLimit This parameter is required.
         */
        public Builder cpuLimit(final com.aliyun.ros.cdk.core.IResolvable cpuLimit) {
            this.props.cpuLimit(cpuLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param displayReleaseVersion This parameter is required.
         */
        public Builder displayReleaseVersion(final java.lang.String displayReleaseVersion) {
            this.props.displayReleaseVersion(displayReleaseVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param displayReleaseVersion This parameter is required.
         */
        public Builder displayReleaseVersion(final com.aliyun.ros.cdk.core.IResolvable displayReleaseVersion) {
            this.props.displayReleaseVersion(displayReleaseVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param livyVersion This parameter is required.
         */
        public Builder livyVersion(final java.lang.String livyVersion) {
            this.props.livyVersion(livyVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param livyVersion This parameter is required.
         */
        public Builder livyVersion(final com.aliyun.ros.cdk.core.IResolvable livyVersion) {
            this.props.livyVersion(livyVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param memoryLimit This parameter is required.
         */
        public Builder memoryLimit(final java.lang.String memoryLimit) {
            this.props.memoryLimit(memoryLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param memoryLimit This parameter is required.
         */
        public Builder memoryLimit(final com.aliyun.ros.cdk.core.IResolvable memoryLimit) {
            this.props.memoryLimit(memoryLimit);
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
         * @return {@code this}
         * @param queueName This parameter is required.
         */
        public Builder queueName(final java.lang.String queueName) {
            this.props.queueName(queueName);
            return this;
        }
        /**
         * @return {@code this}
         * @param queueName This parameter is required.
         */
        public Builder queueName(final com.aliyun.ros.cdk.core.IResolvable queueName) {
            this.props.queueName(queueName);
            return this;
        }

        /**
         * @return {@code this}
         * @param workspaceBizId This parameter is required.
         */
        public Builder workspaceBizId(final java.lang.String workspaceBizId) {
            this.props.workspaceBizId(workspaceBizId);
            return this;
        }
        /**
         * @return {@code this}
         * @param workspaceBizId This parameter is required.
         */
        public Builder workspaceBizId(final com.aliyun.ros.cdk.core.IResolvable workspaceBizId) {
            this.props.workspaceBizId(workspaceBizId);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoStartConfiguration This parameter is required.
         */
        public Builder autoStartConfiguration(final com.aliyun.ros.cdk.core.IResolvable autoStartConfiguration) {
            this.props.autoStartConfiguration(autoStartConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoStartConfiguration This parameter is required.
         */
        public Builder autoStartConfiguration(final com.aliyun.ros.cdk.emr.RosLivyCompute.AutoStartConfigurationProperty autoStartConfiguration) {
            this.props.autoStartConfiguration(autoStartConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoStopConfiguration This parameter is required.
         */
        public Builder autoStopConfiguration(final com.aliyun.ros.cdk.core.IResolvable autoStopConfiguration) {
            this.props.autoStopConfiguration(autoStopConfiguration);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoStopConfiguration This parameter is required.
         */
        public Builder autoStopConfiguration(final com.aliyun.ros.cdk.emr.RosLivyCompute.AutoStopConfigurationProperty autoStopConfiguration) {
            this.props.autoStopConfiguration(autoStopConfiguration);
            return this;
        }

        /**
         * @return {@code this}
         * @param enablePublic This parameter is required.
         */
        public Builder enablePublic(final java.lang.Boolean enablePublic) {
            this.props.enablePublic(enablePublic);
            return this;
        }
        /**
         * @return {@code this}
         * @param enablePublic This parameter is required.
         */
        public Builder enablePublic(final com.aliyun.ros.cdk.core.IResolvable enablePublic) {
            this.props.enablePublic(enablePublic);
            return this;
        }

        /**
         * @return {@code this}
         * @param environmentId This parameter is required.
         */
        public Builder environmentId(final java.lang.String environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }
        /**
         * @return {@code this}
         * @param environmentId This parameter is required.
         */
        public Builder environmentId(final com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.props.environmentId(environmentId);
            return this;
        }

        /**
         * @return {@code this}
         * @param fusion This parameter is required.
         */
        public Builder fusion(final java.lang.Boolean fusion) {
            this.props.fusion(fusion);
            return this;
        }
        /**
         * @return {@code this}
         * @param fusion This parameter is required.
         */
        public Builder fusion(final com.aliyun.ros.cdk.core.IResolvable fusion) {
            this.props.fusion(fusion);
            return this;
        }

        /**
         * @return {@code this}
         * @param livyServerConf This parameter is required.
         */
        public Builder livyServerConf(final java.lang.String livyServerConf) {
            this.props.livyServerConf(livyServerConf);
            return this;
        }
        /**
         * @return {@code this}
         * @param livyServerConf This parameter is required.
         */
        public Builder livyServerConf(final com.aliyun.ros.cdk.core.IResolvable livyServerConf) {
            this.props.livyServerConf(livyServerConf);
            return this;
        }

        /**
         * @return {@code this}
         * @param networkName This parameter is required.
         */
        public Builder networkName(final java.lang.String networkName) {
            this.props.networkName(networkName);
            return this;
        }
        /**
         * @return {@code this}
         * @param networkName This parameter is required.
         */
        public Builder networkName(final com.aliyun.ros.cdk.core.IResolvable networkName) {
            this.props.networkName(networkName);
            return this;
        }

        /**
         * @return {@code this}
         * @param releaseVersion This parameter is required.
         */
        public Builder releaseVersion(final java.lang.String releaseVersion) {
            this.props.releaseVersion(releaseVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param releaseVersion This parameter is required.
         */
        public Builder releaseVersion(final com.aliyun.ros.cdk.core.IResolvable releaseVersion) {
            this.props.releaseVersion(releaseVersion);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.RosLivyCompute}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.RosLivyCompute build() {
            return new com.aliyun.ros.cdk.emr.RosLivyCompute(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
