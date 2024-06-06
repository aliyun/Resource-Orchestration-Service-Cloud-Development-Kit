package com.aliyun.ros.cdk.devops;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DEVOPS::HostGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:13.747Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.RosHostGroup")
public class RosHostGroup extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHostGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHostGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.devops.RosHostGroup.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHostGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.devops.RosHostGroupProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrHostGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationId() {
        return software.amazon.jsii.Kernel.get(this, "organizationId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setOrganizationId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "organizationId", java.util.Objects.requireNonNull(value, "organizationId is required"));
    }

    /**
     */
    public void setOrganizationId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "organizationId", java.util.Objects.requireNonNull(value, "organizationId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getServiceConnectionId() {
        return software.amazon.jsii.Kernel.get(this, "serviceConnectionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServiceConnectionId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "serviceConnectionId", java.util.Objects.requireNonNull(value, "serviceConnectionId is required"));
    }

    /**
     */
    public void setServiceConnectionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serviceConnectionId", java.util.Objects.requireNonNull(value, "serviceConnectionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAliyunRegion() {
        return software.amazon.jsii.Kernel.get(this, "aliyunRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAliyunRegion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aliyunRegion", value);
    }

    /**
     */
    public void setAliyunRegion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aliyunRegion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEcsLabelKey() {
        return software.amazon.jsii.Kernel.get(this, "ecsLabelKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsLabelKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ecsLabelKey", value);
    }

    /**
     */
    public void setEcsLabelKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsLabelKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEcsLabelValue() {
        return software.amazon.jsii.Kernel.get(this, "ecsLabelValue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsLabelValue(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ecsLabelValue", value);
    }

    /**
     */
    public void setEcsLabelValue(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsLabelValue", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEcsType() {
        return software.amazon.jsii.Kernel.get(this, "ecsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEcsType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ecsType", value);
    }

    /**
     */
    public void setEcsType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ecsType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnvId() {
        return software.amazon.jsii.Kernel.get(this, "envId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnvId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "envId", value);
    }

    /**
     */
    public void setEnvId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "envId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMachineInfos() {
        return software.amazon.jsii.Kernel.get(this, "machineInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMachineInfos(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "machineInfos", value);
    }

    /**
     */
    public void setMachineInfos(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.devops.RosHostGroup.MachineInfosProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.devops.RosHostGroup.MachineInfosProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "machineInfos", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTagIds() {
        return software.amazon.jsii.Kernel.get(this, "tagIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTagIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tagIds", value);
    }

    /**
     */
    public void setTagIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "tagIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "type", value);
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "type", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.devops.$Module.class, fqn = "@alicloud/ros-cdk-devops.RosHostGroup.MachineInfosProperty")
    @software.amazon.jsii.Jsii.Proxy(MachineInfosProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface MachineInfosProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getMachineSn();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getAliyunRegionId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getIp() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link MachineInfosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link MachineInfosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<MachineInfosProperty> {
            java.lang.Object machineSn;
            java.lang.Object aliyunRegionId;
            java.lang.Object instanceName;
            java.lang.Object ip;

            /**
             * Sets the value of {@link MachineInfosProperty#getMachineSn}
             * @param machineSn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder machineSn(java.lang.String machineSn) {
                this.machineSn = machineSn;
                return this;
            }

            /**
             * Sets the value of {@link MachineInfosProperty#getMachineSn}
             * @param machineSn the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder machineSn(com.aliyun.ros.cdk.core.IResolvable machineSn) {
                this.machineSn = machineSn;
                return this;
            }

            /**
             * Sets the value of {@link MachineInfosProperty#getAliyunRegionId}
             * @param aliyunRegionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aliyunRegionId(java.lang.String aliyunRegionId) {
                this.aliyunRegionId = aliyunRegionId;
                return this;
            }

            /**
             * Sets the value of {@link MachineInfosProperty#getAliyunRegionId}
             * @param aliyunRegionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder aliyunRegionId(com.aliyun.ros.cdk.core.IResolvable aliyunRegionId) {
                this.aliyunRegionId = aliyunRegionId;
                return this;
            }

            /**
             * Sets the value of {@link MachineInfosProperty#getInstanceName}
             * @param instanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceName(java.lang.String instanceName) {
                this.instanceName = instanceName;
                return this;
            }

            /**
             * Sets the value of {@link MachineInfosProperty#getInstanceName}
             * @param instanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
                this.instanceName = instanceName;
                return this;
            }

            /**
             * Sets the value of {@link MachineInfosProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(java.lang.String ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link MachineInfosProperty#getIp}
             * @param ip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(com.aliyun.ros.cdk.core.IResolvable ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link MachineInfosProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public MachineInfosProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link MachineInfosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements MachineInfosProperty {
            private final java.lang.Object machineSn;
            private final java.lang.Object aliyunRegionId;
            private final java.lang.Object instanceName;
            private final java.lang.Object ip;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.machineSn = software.amazon.jsii.Kernel.get(this, "machineSn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.aliyunRegionId = software.amazon.jsii.Kernel.get(this, "aliyunRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ip = software.amazon.jsii.Kernel.get(this, "ip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.machineSn = java.util.Objects.requireNonNull(builder.machineSn, "machineSn is required");
                this.aliyunRegionId = builder.aliyunRegionId;
                this.instanceName = builder.instanceName;
                this.ip = builder.ip;
            }

            @Override
            public final java.lang.Object getMachineSn() {
                return this.machineSn;
            }

            @Override
            public final java.lang.Object getAliyunRegionId() {
                return this.aliyunRegionId;
            }

            @Override
            public final java.lang.Object getInstanceName() {
                return this.instanceName;
            }

            @Override
            public final java.lang.Object getIp() {
                return this.ip;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("machineSn", om.valueToTree(this.getMachineSn()));
                if (this.getAliyunRegionId() != null) {
                    data.set("aliyunRegionId", om.valueToTree(this.getAliyunRegionId()));
                }
                if (this.getInstanceName() != null) {
                    data.set("instanceName", om.valueToTree(this.getInstanceName()));
                }
                if (this.getIp() != null) {
                    data.set("ip", om.valueToTree(this.getIp()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-devops.RosHostGroup.MachineInfosProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                MachineInfosProperty.Jsii$Proxy that = (MachineInfosProperty.Jsii$Proxy) o;

                if (!machineSn.equals(that.machineSn)) return false;
                if (this.aliyunRegionId != null ? !this.aliyunRegionId.equals(that.aliyunRegionId) : that.aliyunRegionId != null) return false;
                if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
                return this.ip != null ? this.ip.equals(that.ip) : that.ip == null;
            }

            @Override
            public final int hashCode() {
                int result = this.machineSn.hashCode();
                result = 31 * result + (this.aliyunRegionId != null ? this.aliyunRegionId.hashCode() : 0);
                result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
                result = 31 * result + (this.ip != null ? this.ip.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.devops.RosHostGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.devops.RosHostGroup> {
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
        private final com.aliyun.ros.cdk.devops.RosHostGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.devops.RosHostGroupProps.Builder();
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
         * @param organizationId This parameter is required.
         */
        public Builder organizationId(final java.lang.String organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }
        /**
         * @return {@code this}
         * @param organizationId This parameter is required.
         */
        public Builder organizationId(final com.aliyun.ros.cdk.core.IResolvable organizationId) {
            this.props.organizationId(organizationId);
            return this;
        }

        /**
         * @return {@code this}
         * @param serviceConnectionId This parameter is required.
         */
        public Builder serviceConnectionId(final java.lang.Number serviceConnectionId) {
            this.props.serviceConnectionId(serviceConnectionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param serviceConnectionId This parameter is required.
         */
        public Builder serviceConnectionId(final com.aliyun.ros.cdk.core.IResolvable serviceConnectionId) {
            this.props.serviceConnectionId(serviceConnectionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param aliyunRegion This parameter is required.
         */
        public Builder aliyunRegion(final java.lang.String aliyunRegion) {
            this.props.aliyunRegion(aliyunRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param aliyunRegion This parameter is required.
         */
        public Builder aliyunRegion(final com.aliyun.ros.cdk.core.IResolvable aliyunRegion) {
            this.props.aliyunRegion(aliyunRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsLabelKey This parameter is required.
         */
        public Builder ecsLabelKey(final java.lang.String ecsLabelKey) {
            this.props.ecsLabelKey(ecsLabelKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsLabelKey This parameter is required.
         */
        public Builder ecsLabelKey(final com.aliyun.ros.cdk.core.IResolvable ecsLabelKey) {
            this.props.ecsLabelKey(ecsLabelKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsLabelValue This parameter is required.
         */
        public Builder ecsLabelValue(final java.lang.String ecsLabelValue) {
            this.props.ecsLabelValue(ecsLabelValue);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsLabelValue This parameter is required.
         */
        public Builder ecsLabelValue(final com.aliyun.ros.cdk.core.IResolvable ecsLabelValue) {
            this.props.ecsLabelValue(ecsLabelValue);
            return this;
        }

        /**
         * @return {@code this}
         * @param ecsType This parameter is required.
         */
        public Builder ecsType(final java.lang.String ecsType) {
            this.props.ecsType(ecsType);
            return this;
        }
        /**
         * @return {@code this}
         * @param ecsType This parameter is required.
         */
        public Builder ecsType(final com.aliyun.ros.cdk.core.IResolvable ecsType) {
            this.props.ecsType(ecsType);
            return this;
        }

        /**
         * @return {@code this}
         * @param envId This parameter is required.
         */
        public Builder envId(final java.lang.String envId) {
            this.props.envId(envId);
            return this;
        }
        /**
         * @return {@code this}
         * @param envId This parameter is required.
         */
        public Builder envId(final com.aliyun.ros.cdk.core.IResolvable envId) {
            this.props.envId(envId);
            return this;
        }

        /**
         * @return {@code this}
         * @param machineInfos This parameter is required.
         */
        public Builder machineInfos(final com.aliyun.ros.cdk.core.IResolvable machineInfos) {
            this.props.machineInfos(machineInfos);
            return this;
        }
        /**
         * @return {@code this}
         * @param machineInfos This parameter is required.
         */
        public Builder machineInfos(final java.util.List<? extends java.lang.Object> machineInfos) {
            this.props.machineInfos(machineInfos);
            return this;
        }

        /**
         * @return {@code this}
         * @param tagIds This parameter is required.
         */
        public Builder tagIds(final com.aliyun.ros.cdk.core.IResolvable tagIds) {
            this.props.tagIds(tagIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param tagIds This parameter is required.
         */
        public Builder tagIds(final java.util.List<? extends java.lang.Object> tagIds) {
            this.props.tagIds(tagIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.devops.RosHostGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.devops.RosHostGroup build() {
            return new com.aliyun.ros.cdk.devops.RosHostGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
