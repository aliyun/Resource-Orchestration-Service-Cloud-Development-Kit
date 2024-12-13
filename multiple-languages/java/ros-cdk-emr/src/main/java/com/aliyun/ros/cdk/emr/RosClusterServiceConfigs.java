package com.aliyun.ros.cdk.emr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::EMR::ClusterServiceConfigs</code>, which is used to create or modify the configurations of a specified service in a cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:08.087Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosClusterServiceConfigs")
public class RosClusterServiceConfigs extends com.aliyun.ros.cdk.core.RosResource {

    protected RosClusterServiceConfigs(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosClusterServiceConfigs(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.emr.RosClusterServiceConfigs.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosClusterServiceConfigs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.RosClusterServiceConfigsProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterId() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getClusterId() {
        return software.amazon.jsii.Kernel.get(this, "clusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    /**
     */
    public void setClusterId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterId", java.util.Objects.requireNonNull(value, "clusterId is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getServiceConfigs() {
        return software.amazon.jsii.Kernel.get(this, "serviceConfigs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceConfigs(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceConfigs", java.util.Objects.requireNonNull(value, "serviceConfigs is required"));
    }

    /**
     */
    public void setServiceConfigs(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.emr.RosClusterServiceConfigs.ServiceConfigsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.emr.RosClusterServiceConfigs.ServiceConfigsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "serviceConfigs", java.util.Objects.requireNonNull(value, "serviceConfigs is required"));
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosClusterServiceConfigs.ServiceConfigsProperty")
    @software.amazon.jsii.Jsii.Proxy(ServiceConfigsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ServiceConfigsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getConfigParams();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getComment() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCustomConfigParams() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayClusterIdList() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGroupId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostInstanceId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRefreshHostConfig() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ServiceConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ServiceConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ServiceConfigsProperty> {
            java.lang.Object configParams;
            java.lang.Object serviceName;
            java.lang.Object comment;
            java.lang.Object configType;
            java.lang.Object customConfigParams;
            java.lang.Object gatewayClusterIdList;
            java.lang.Object groupId;
            java.lang.Object hostInstanceId;
            java.lang.Object refreshHostConfig;

            /**
             * Sets the value of {@link ServiceConfigsProperty#getConfigParams}
             * @param configParams the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configParams(java.lang.String configParams) {
                this.configParams = configParams;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getConfigParams}
             * @param configParams the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configParams(com.aliyun.ros.cdk.core.IResolvable configParams) {
                this.configParams = configParams;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getServiceName}
             * @param serviceName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceName(java.lang.String serviceName) {
                this.serviceName = serviceName;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getServiceName}
             * @param serviceName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
                this.serviceName = serviceName;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getComment}
             * @param comment the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comment(java.lang.String comment) {
                this.comment = comment;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getComment}
             * @param comment the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder comment(com.aliyun.ros.cdk.core.IResolvable comment) {
                this.comment = comment;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getConfigType}
             * @param configType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configType(java.lang.String configType) {
                this.configType = configType;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getConfigType}
             * @param configType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configType(com.aliyun.ros.cdk.core.IResolvable configType) {
                this.configType = configType;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getCustomConfigParams}
             * @param customConfigParams the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customConfigParams(java.lang.String customConfigParams) {
                this.customConfigParams = customConfigParams;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getCustomConfigParams}
             * @param customConfigParams the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder customConfigParams(com.aliyun.ros.cdk.core.IResolvable customConfigParams) {
                this.customConfigParams = customConfigParams;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getGatewayClusterIdList}
             * @param gatewayClusterIdList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayClusterIdList(com.aliyun.ros.cdk.core.IResolvable gatewayClusterIdList) {
                this.gatewayClusterIdList = gatewayClusterIdList;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getGatewayClusterIdList}
             * @param gatewayClusterIdList the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gatewayClusterIdList(java.util.List<? extends java.lang.Object> gatewayClusterIdList) {
                this.gatewayClusterIdList = gatewayClusterIdList;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getGroupId}
             * @param groupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupId(java.lang.String groupId) {
                this.groupId = groupId;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getGroupId}
             * @param groupId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
                this.groupId = groupId;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getHostInstanceId}
             * @param hostInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostInstanceId(java.lang.String hostInstanceId) {
                this.hostInstanceId = hostInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getHostInstanceId}
             * @param hostInstanceId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostInstanceId(com.aliyun.ros.cdk.core.IResolvable hostInstanceId) {
                this.hostInstanceId = hostInstanceId;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getRefreshHostConfig}
             * @param refreshHostConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder refreshHostConfig(java.lang.Boolean refreshHostConfig) {
                this.refreshHostConfig = refreshHostConfig;
                return this;
            }

            /**
             * Sets the value of {@link ServiceConfigsProperty#getRefreshHostConfig}
             * @param refreshHostConfig the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder refreshHostConfig(com.aliyun.ros.cdk.core.IResolvable refreshHostConfig) {
                this.refreshHostConfig = refreshHostConfig;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ServiceConfigsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ServiceConfigsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ServiceConfigsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ServiceConfigsProperty {
            private final java.lang.Object configParams;
            private final java.lang.Object serviceName;
            private final java.lang.Object comment;
            private final java.lang.Object configType;
            private final java.lang.Object customConfigParams;
            private final java.lang.Object gatewayClusterIdList;
            private final java.lang.Object groupId;
            private final java.lang.Object hostInstanceId;
            private final java.lang.Object refreshHostConfig;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.configParams = software.amazon.jsii.Kernel.get(this, "configParams", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.comment = software.amazon.jsii.Kernel.get(this, "comment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configType = software.amazon.jsii.Kernel.get(this, "configType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.customConfigParams = software.amazon.jsii.Kernel.get(this, "customConfigParams", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gatewayClusterIdList = software.amazon.jsii.Kernel.get(this, "gatewayClusterIdList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostInstanceId = software.amazon.jsii.Kernel.get(this, "hostInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.refreshHostConfig = software.amazon.jsii.Kernel.get(this, "refreshHostConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.configParams = java.util.Objects.requireNonNull(builder.configParams, "configParams is required");
                this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
                this.comment = builder.comment;
                this.configType = builder.configType;
                this.customConfigParams = builder.customConfigParams;
                this.gatewayClusterIdList = builder.gatewayClusterIdList;
                this.groupId = builder.groupId;
                this.hostInstanceId = builder.hostInstanceId;
                this.refreshHostConfig = builder.refreshHostConfig;
            }

            @Override
            public final java.lang.Object getConfigParams() {
                return this.configParams;
            }

            @Override
            public final java.lang.Object getServiceName() {
                return this.serviceName;
            }

            @Override
            public final java.lang.Object getComment() {
                return this.comment;
            }

            @Override
            public final java.lang.Object getConfigType() {
                return this.configType;
            }

            @Override
            public final java.lang.Object getCustomConfigParams() {
                return this.customConfigParams;
            }

            @Override
            public final java.lang.Object getGatewayClusterIdList() {
                return this.gatewayClusterIdList;
            }

            @Override
            public final java.lang.Object getGroupId() {
                return this.groupId;
            }

            @Override
            public final java.lang.Object getHostInstanceId() {
                return this.hostInstanceId;
            }

            @Override
            public final java.lang.Object getRefreshHostConfig() {
                return this.refreshHostConfig;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("configParams", om.valueToTree(this.getConfigParams()));
                data.set("serviceName", om.valueToTree(this.getServiceName()));
                if (this.getComment() != null) {
                    data.set("comment", om.valueToTree(this.getComment()));
                }
                if (this.getConfigType() != null) {
                    data.set("configType", om.valueToTree(this.getConfigType()));
                }
                if (this.getCustomConfigParams() != null) {
                    data.set("customConfigParams", om.valueToTree(this.getCustomConfigParams()));
                }
                if (this.getGatewayClusterIdList() != null) {
                    data.set("gatewayClusterIdList", om.valueToTree(this.getGatewayClusterIdList()));
                }
                if (this.getGroupId() != null) {
                    data.set("groupId", om.valueToTree(this.getGroupId()));
                }
                if (this.getHostInstanceId() != null) {
                    data.set("hostInstanceId", om.valueToTree(this.getHostInstanceId()));
                }
                if (this.getRefreshHostConfig() != null) {
                    data.set("refreshHostConfig", om.valueToTree(this.getRefreshHostConfig()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosClusterServiceConfigs.ServiceConfigsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ServiceConfigsProperty.Jsii$Proxy that = (ServiceConfigsProperty.Jsii$Proxy) o;

                if (!configParams.equals(that.configParams)) return false;
                if (!serviceName.equals(that.serviceName)) return false;
                if (this.comment != null ? !this.comment.equals(that.comment) : that.comment != null) return false;
                if (this.configType != null ? !this.configType.equals(that.configType) : that.configType != null) return false;
                if (this.customConfigParams != null ? !this.customConfigParams.equals(that.customConfigParams) : that.customConfigParams != null) return false;
                if (this.gatewayClusterIdList != null ? !this.gatewayClusterIdList.equals(that.gatewayClusterIdList) : that.gatewayClusterIdList != null) return false;
                if (this.groupId != null ? !this.groupId.equals(that.groupId) : that.groupId != null) return false;
                if (this.hostInstanceId != null ? !this.hostInstanceId.equals(that.hostInstanceId) : that.hostInstanceId != null) return false;
                return this.refreshHostConfig != null ? this.refreshHostConfig.equals(that.refreshHostConfig) : that.refreshHostConfig == null;
            }

            @Override
            public final int hashCode() {
                int result = this.configParams.hashCode();
                result = 31 * result + (this.serviceName.hashCode());
                result = 31 * result + (this.comment != null ? this.comment.hashCode() : 0);
                result = 31 * result + (this.configType != null ? this.configType.hashCode() : 0);
                result = 31 * result + (this.customConfigParams != null ? this.customConfigParams.hashCode() : 0);
                result = 31 * result + (this.gatewayClusterIdList != null ? this.gatewayClusterIdList.hashCode() : 0);
                result = 31 * result + (this.groupId != null ? this.groupId.hashCode() : 0);
                result = 31 * result + (this.hostInstanceId != null ? this.hostInstanceId.hashCode() : 0);
                result = 31 * result + (this.refreshHostConfig != null ? this.refreshHostConfig.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.RosClusterServiceConfigs}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.RosClusterServiceConfigs> {
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
        private final com.aliyun.ros.cdk.emr.RosClusterServiceConfigsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.RosClusterServiceConfigsProps.Builder();
        }

        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final java.lang.String clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterId This parameter is required.
         */
        public Builder clusterId(final com.aliyun.ros.cdk.core.IResolvable clusterId) {
            this.props.clusterId(clusterId);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceConfigs This parameter is required.
         */
        public Builder serviceConfigs(final com.aliyun.ros.cdk.core.IResolvable serviceConfigs) {
            this.props.serviceConfigs(serviceConfigs);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceConfigs This parameter is required.
         */
        public Builder serviceConfigs(final java.util.List<? extends java.lang.Object> serviceConfigs) {
            this.props.serviceConfigs(serviceConfigs);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.RosClusterServiceConfigs}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.RosClusterServiceConfigs build() {
            return new com.aliyun.ros.cdk.emr.RosClusterServiceConfigs(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
