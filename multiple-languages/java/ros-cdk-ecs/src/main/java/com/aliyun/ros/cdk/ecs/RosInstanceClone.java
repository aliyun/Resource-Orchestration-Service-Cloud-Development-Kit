package com.aliyun.ros.cdk.ecs;

/**
 * A ROS template type:  `ALIYUN::ECS::InstanceClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T03:36:09.992Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceClone")
public class RosInstanceClone extends com.aliyun.ros.cdk.core.RosResource {

    protected RosInstanceClone(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosInstanceClone(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ecs.RosInstanceClone.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new `ALIYUN::ECS::InstanceClone`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosInstanceClone(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RosInstanceCloneProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostName() {
        return software.amazon.jsii.Kernel.get(this, "attrHostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInnerIp() {
        return software.amazon.jsii.Kernel.get(this, "attrInnerIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrimaryNetworkInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrPrimaryNetworkInterfaceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPrivateIp() {
        return software.amazon.jsii.Kernel.get(this, "attrPrivateIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPublicIp() {
        return software.amazon.jsii.Kernel.get(this, "attrPublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.TagManager getTags() {
        return software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.TagManager.class));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.String getSourceInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "sourceInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSourceInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceInstanceId", java.util.Objects.requireNonNull(value, "sourceInstanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getBackendServerWeight() {
        return software.amazon.jsii.Kernel.get(this, "backendServerWeight", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setBackendServerWeight(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "backendServerWeight", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeletionProtection(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtection", value);
    }

    /**
     */
    public void setDeletionProtection(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deletionProtection", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDiskMappings() {
        return software.amazon.jsii.Kernel.get(this, "diskMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDiskMappings(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "diskMappings", value);
    }

    /**
     */
    public void setDiskMappings(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        software.amazon.jsii.Kernel.set(this, "diskMappings", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getImageId() {
        return software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setImageId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getInstanceChargeType() {
        return software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setInstanceChargeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceChargeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getInternetMaxBandwidthIn() {
        return software.amazon.jsii.Kernel.get(this, "internetMaxBandwidthIn", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setInternetMaxBandwidthIn(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "internetMaxBandwidthIn", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getKeyPairName() {
        return software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setKeyPairName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "keyPairName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getLoadBalancerIdToAttach() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerIdToAttach", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setLoadBalancerIdToAttach(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerIdToAttach", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
    }

    /**
     */
    public void setPeriod(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "period", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setRamRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ramRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSpotPriceLimit() {
        return software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSpotPriceLimit(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotPriceLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getSpotStrategy() {
        return software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setSpotStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
        return software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     */
    public void setZoneId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "zoneId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RosInstanceClone.DiskMappingsProperty")
    @software.amazon.jsii.Jsii.Proxy(DiskMappingsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DiskMappingsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.String getSize();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getCategory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDevice() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getDiskName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getPerformanceLevel() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.String getSnapshotId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link DiskMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DiskMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DiskMappingsProperty> {
            private java.lang.String size;
            private java.lang.String category;
            private java.lang.String description;
            private java.lang.String device;
            private java.lang.String diskName;
            private java.lang.String performanceLevel;
            private java.lang.String snapshotId;

            /**
             * Sets the value of {@link DiskMappingsProperty#getSize}
             * @param size the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder size(java.lang.String size) {
                this.size = size;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getCategory}
             * @param category the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder category(java.lang.String category) {
                this.category = category;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDescription}
             * @param description the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder description(java.lang.String description) {
                this.description = description;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDevice}
             * @param device the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder device(java.lang.String device) {
                this.device = device;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getDiskName}
             * @param diskName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskName(java.lang.String diskName) {
                this.diskName = diskName;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getPerformanceLevel}
             * @param performanceLevel the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder performanceLevel(java.lang.String performanceLevel) {
                this.performanceLevel = performanceLevel;
                return this;
            }

            /**
             * Sets the value of {@link DiskMappingsProperty#getSnapshotId}
             * @param snapshotId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder snapshotId(java.lang.String snapshotId) {
                this.snapshotId = snapshotId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DiskMappingsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DiskMappingsProperty build() {
                return new Jsii$Proxy(size, category, description, device, diskName, performanceLevel, snapshotId);
            }
        }

        /**
         * An implementation for {@link DiskMappingsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DiskMappingsProperty {
            private final java.lang.String size;
            private final java.lang.String category;
            private final java.lang.String description;
            private final java.lang.String device;
            private final java.lang.String diskName;
            private final java.lang.String performanceLevel;
            private final java.lang.String snapshotId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.size = software.amazon.jsii.Kernel.get(this, "size", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.device = software.amazon.jsii.Kernel.get(this, "device", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.diskName = software.amazon.jsii.Kernel.get(this, "diskName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.performanceLevel = software.amazon.jsii.Kernel.get(this, "performanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
                this.snapshotId = software.amazon.jsii.Kernel.get(this, "snapshotId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final java.lang.String size, final java.lang.String category, final java.lang.String description, final java.lang.String device, final java.lang.String diskName, final java.lang.String performanceLevel, final java.lang.String snapshotId) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.size = java.util.Objects.requireNonNull(size, "size is required");
                this.category = category;
                this.description = description;
                this.device = device;
                this.diskName = diskName;
                this.performanceLevel = performanceLevel;
                this.snapshotId = snapshotId;
            }

            @Override
            public final java.lang.String getSize() {
                return this.size;
            }

            @Override
            public final java.lang.String getCategory() {
                return this.category;
            }

            @Override
            public final java.lang.String getDescription() {
                return this.description;
            }

            @Override
            public final java.lang.String getDevice() {
                return this.device;
            }

            @Override
            public final java.lang.String getDiskName() {
                return this.diskName;
            }

            @Override
            public final java.lang.String getPerformanceLevel() {
                return this.performanceLevel;
            }

            @Override
            public final java.lang.String getSnapshotId() {
                return this.snapshotId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("size", om.valueToTree(this.getSize()));
                if (this.getCategory() != null) {
                    data.set("category", om.valueToTree(this.getCategory()));
                }
                if (this.getDescription() != null) {
                    data.set("description", om.valueToTree(this.getDescription()));
                }
                if (this.getDevice() != null) {
                    data.set("device", om.valueToTree(this.getDevice()));
                }
                if (this.getDiskName() != null) {
                    data.set("diskName", om.valueToTree(this.getDiskName()));
                }
                if (this.getPerformanceLevel() != null) {
                    data.set("performanceLevel", om.valueToTree(this.getPerformanceLevel()));
                }
                if (this.getSnapshotId() != null) {
                    data.set("snapshotId", om.valueToTree(this.getSnapshotId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.RosInstanceClone.DiskMappingsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DiskMappingsProperty.Jsii$Proxy that = (DiskMappingsProperty.Jsii$Proxy) o;

                if (!size.equals(that.size)) return false;
                if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
                if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
                if (this.device != null ? !this.device.equals(that.device) : that.device != null) return false;
                if (this.diskName != null ? !this.diskName.equals(that.diskName) : that.diskName != null) return false;
                if (this.performanceLevel != null ? !this.performanceLevel.equals(that.performanceLevel) : that.performanceLevel != null) return false;
                return this.snapshotId != null ? this.snapshotId.equals(that.snapshotId) : that.snapshotId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.size.hashCode();
                result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
                result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
                result = 31 * result + (this.device != null ? this.device.hashCode() : 0);
                result = 31 * result + (this.diskName != null ? this.diskName.hashCode() : 0);
                result = 31 * result + (this.performanceLevel != null ? this.performanceLevel.hashCode() : 0);
                result = 31 * result + (this.snapshotId != null ? this.snapshotId.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RosInstanceClone}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RosInstanceClone> {
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
        private final com.aliyun.ros.cdk.ecs.RosInstanceCloneProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RosInstanceCloneProps.Builder();
        }

        /**
         * @return {@code this}
         * @param sourceInstanceId This parameter is required.
         */
        public Builder sourceInstanceId(final java.lang.String sourceInstanceId) {
            this.props.sourceInstanceId(sourceInstanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param backendServerWeight This parameter is required.
         */
        public Builder backendServerWeight(final java.lang.Number backendServerWeight) {
            this.props.backendServerWeight(backendServerWeight);
            return this;
        }

        /**
         * @return {@code this}
         * @param deletionProtection This parameter is required.
         */
        public Builder deletionProtection(final java.lang.Boolean deletionProtection) {
            this.props.deletionProtection(deletionProtection);
            return this;
        }
        /**
         * @return {@code this}
         * @param deletionProtection This parameter is required.
         */
        public Builder deletionProtection(final com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.props.deletionProtection(deletionProtection);
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
         * @param diskMappings This parameter is required.
         */
        public Builder diskMappings(final com.aliyun.ros.cdk.core.IResolvable diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }
        /**
         * @return {@code this}
         * @param diskMappings This parameter is required.
         */
        public Builder diskMappings(final java.util.List<? extends java.lang.Object> diskMappings) {
            this.props.diskMappings(diskMappings);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageId This parameter is required.
         */
        public Builder imageId(final java.lang.String imageId) {
            this.props.imageId(imageId);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceChargeType This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param internetMaxBandwidthIn This parameter is required.
         */
        public Builder internetMaxBandwidthIn(final java.lang.Number internetMaxBandwidthIn) {
            this.props.internetMaxBandwidthIn(internetMaxBandwidthIn);
            return this;
        }

        /**
         * @return {@code this}
         * @param keyPairName This parameter is required.
         */
        public Builder keyPairName(final java.lang.String keyPairName) {
            this.props.keyPairName(keyPairName);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerIdToAttach This parameter is required.
         */
        public Builder loadBalancerIdToAttach(final java.lang.String loadBalancerIdToAttach) {
            this.props.loadBalancerIdToAttach(loadBalancerIdToAttach);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param period This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }

        /**
         * @return {@code this}
         * @param ramRoleName This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotPriceLimit This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.String spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param zoneId This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ecs.RosInstanceClone}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RosInstanceClone build() {
            return new com.aliyun.ros.cdk.ecs.RosInstanceClone(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
