package com.aliyun.ros.cdk.ecs.datasource;

/**
 * Properties for defining a <code>DATASOURCE::ECS::RecommendInstanceTypes</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:37.333Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.RosRecommendInstanceTypesProps")
@software.amazon.jsii.Jsii.Proxy(RosRecommendInstanceTypesProps.Jsii$Proxy.class)
public interface RosRecommendInstanceTypesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCores() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceFamilyLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypeFamilies() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxPrice() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriorityStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScene() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneMatchMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosRecommendInstanceTypesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosRecommendInstanceTypesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosRecommendInstanceTypesProps> {
        java.lang.Object cores;
        java.lang.Object instanceChargeType;
        java.lang.Object instanceFamilyLevel;
        java.lang.Object instanceType;
        java.lang.Object instanceTypeFamilies;
        java.lang.Object ioOptimized;
        java.lang.Object maxPrice;
        java.lang.Object memory;
        java.lang.Object priorityStrategy;
        java.lang.Object scene;
        java.lang.Object spotStrategy;
        java.lang.Object systemDiskCategory;
        java.lang.Object zoneId;
        java.lang.Object zoneMatchMode;

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getCores}
         * @param cores the value to be set.
         * @return {@code this}
         */
        public Builder cores(java.lang.Number cores) {
            this.cores = cores;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getCores}
         * @param cores the value to be set.
         * @return {@code this}
         */
        public Builder cores(com.aliyun.ros.cdk.core.IResolvable cores) {
            this.cores = cores;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getInstanceChargeType}
         * @param instanceChargeType the value to be set.
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getInstanceFamilyLevel}
         * @param instanceFamilyLevel the value to be set.
         * @return {@code this}
         */
        public Builder instanceFamilyLevel(java.lang.String instanceFamilyLevel) {
            this.instanceFamilyLevel = instanceFamilyLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getInstanceFamilyLevel}
         * @param instanceFamilyLevel the value to be set.
         * @return {@code this}
         */
        public Builder instanceFamilyLevel(com.aliyun.ros.cdk.core.IResolvable instanceFamilyLevel) {
            this.instanceFamilyLevel = instanceFamilyLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getInstanceTypeFamilies}
         * @param instanceTypeFamilies the value to be set.
         * @return {@code this}
         */
        public Builder instanceTypeFamilies(com.aliyun.ros.cdk.core.IResolvable instanceTypeFamilies) {
            this.instanceTypeFamilies = instanceTypeFamilies;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getInstanceTypeFamilies}
         * @param instanceTypeFamilies the value to be set.
         * @return {@code this}
         */
        public Builder instanceTypeFamilies(java.util.List<? extends java.lang.Object> instanceTypeFamilies) {
            this.instanceTypeFamilies = instanceTypeFamilies;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.String ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getMaxPrice}
         * @param maxPrice the value to be set.
         * @return {@code this}
         */
        public Builder maxPrice(java.lang.Number maxPrice) {
            this.maxPrice = maxPrice;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getMaxPrice}
         * @param maxPrice the value to be set.
         * @return {@code this}
         */
        public Builder maxPrice(com.aliyun.ros.cdk.core.IResolvable maxPrice) {
            this.maxPrice = maxPrice;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getMemory}
         * @param memory the value to be set.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getMemory}
         * @param memory the value to be set.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getPriorityStrategy}
         * @param priorityStrategy the value to be set.
         * @return {@code this}
         */
        public Builder priorityStrategy(java.lang.String priorityStrategy) {
            this.priorityStrategy = priorityStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getPriorityStrategy}
         * @param priorityStrategy the value to be set.
         * @return {@code this}
         */
        public Builder priorityStrategy(com.aliyun.ros.cdk.core.IResolvable priorityStrategy) {
            this.priorityStrategy = priorityStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getScene}
         * @param scene the value to be set.
         * @return {@code this}
         */
        public Builder scene(java.lang.String scene) {
            this.scene = scene;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getScene}
         * @param scene the value to be set.
         * @return {@code this}
         */
        public Builder scene(com.aliyun.ros.cdk.core.IResolvable scene) {
            this.scene = scene;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getSystemDiskCategory}
         * @param systemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskCategory(java.lang.String systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getSystemDiskCategory}
         * @param systemDiskCategory the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskCategory(com.aliyun.ros.cdk.core.IResolvable systemDiskCategory) {
            this.systemDiskCategory = systemDiskCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getZoneMatchMode}
         * @param zoneMatchMode the value to be set.
         * @return {@code this}
         */
        public Builder zoneMatchMode(java.lang.String zoneMatchMode) {
            this.zoneMatchMode = zoneMatchMode;
            return this;
        }

        /**
         * Sets the value of {@link RosRecommendInstanceTypesProps#getZoneMatchMode}
         * @param zoneMatchMode the value to be set.
         * @return {@code this}
         */
        public Builder zoneMatchMode(com.aliyun.ros.cdk.core.IResolvable zoneMatchMode) {
            this.zoneMatchMode = zoneMatchMode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosRecommendInstanceTypesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosRecommendInstanceTypesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosRecommendInstanceTypesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosRecommendInstanceTypesProps {
        private final java.lang.Object cores;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object instanceFamilyLevel;
        private final java.lang.Object instanceType;
        private final java.lang.Object instanceTypeFamilies;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object maxPrice;
        private final java.lang.Object memory;
        private final java.lang.Object priorityStrategy;
        private final java.lang.Object scene;
        private final java.lang.Object spotStrategy;
        private final java.lang.Object systemDiskCategory;
        private final java.lang.Object zoneId;
        private final java.lang.Object zoneMatchMode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cores = software.amazon.jsii.Kernel.get(this, "cores", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceFamilyLevel = software.amazon.jsii.Kernel.get(this, "instanceFamilyLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceTypeFamilies = software.amazon.jsii.Kernel.get(this, "instanceTypeFamilies", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxPrice = software.amazon.jsii.Kernel.get(this, "maxPrice", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priorityStrategy = software.amazon.jsii.Kernel.get(this, "priorityStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scene = software.amazon.jsii.Kernel.get(this, "scene", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskCategory = software.amazon.jsii.Kernel.get(this, "systemDiskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneMatchMode = software.amazon.jsii.Kernel.get(this, "zoneMatchMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cores = builder.cores;
            this.instanceChargeType = builder.instanceChargeType;
            this.instanceFamilyLevel = builder.instanceFamilyLevel;
            this.instanceType = builder.instanceType;
            this.instanceTypeFamilies = builder.instanceTypeFamilies;
            this.ioOptimized = builder.ioOptimized;
            this.maxPrice = builder.maxPrice;
            this.memory = builder.memory;
            this.priorityStrategy = builder.priorityStrategy;
            this.scene = builder.scene;
            this.spotStrategy = builder.spotStrategy;
            this.systemDiskCategory = builder.systemDiskCategory;
            this.zoneId = builder.zoneId;
            this.zoneMatchMode = builder.zoneMatchMode;
        }

        @Override
        public final java.lang.Object getCores() {
            return this.cores;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getInstanceFamilyLevel() {
            return this.instanceFamilyLevel;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getInstanceTypeFamilies() {
            return this.instanceTypeFamilies;
        }

        @Override
        public final java.lang.Object getIoOptimized() {
            return this.ioOptimized;
        }

        @Override
        public final java.lang.Object getMaxPrice() {
            return this.maxPrice;
        }

        @Override
        public final java.lang.Object getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.Object getPriorityStrategy() {
            return this.priorityStrategy;
        }

        @Override
        public final java.lang.Object getScene() {
            return this.scene;
        }

        @Override
        public final java.lang.Object getSpotStrategy() {
            return this.spotStrategy;
        }

        @Override
        public final java.lang.Object getSystemDiskCategory() {
            return this.systemDiskCategory;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getZoneMatchMode() {
            return this.zoneMatchMode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCores() != null) {
                data.set("cores", om.valueToTree(this.getCores()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInstanceFamilyLevel() != null) {
                data.set("instanceFamilyLevel", om.valueToTree(this.getInstanceFamilyLevel()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getInstanceTypeFamilies() != null) {
                data.set("instanceTypeFamilies", om.valueToTree(this.getInstanceTypeFamilies()));
            }
            if (this.getIoOptimized() != null) {
                data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
            }
            if (this.getMaxPrice() != null) {
                data.set("maxPrice", om.valueToTree(this.getMaxPrice()));
            }
            if (this.getMemory() != null) {
                data.set("memory", om.valueToTree(this.getMemory()));
            }
            if (this.getPriorityStrategy() != null) {
                data.set("priorityStrategy", om.valueToTree(this.getPriorityStrategy()));
            }
            if (this.getScene() != null) {
                data.set("scene", om.valueToTree(this.getScene()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getSystemDiskCategory() != null) {
                data.set("systemDiskCategory", om.valueToTree(this.getSystemDiskCategory()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }
            if (this.getZoneMatchMode() != null) {
                data.set("zoneMatchMode", om.valueToTree(this.getZoneMatchMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ecs.datasource.RosRecommendInstanceTypesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosRecommendInstanceTypesProps.Jsii$Proxy that = (RosRecommendInstanceTypesProps.Jsii$Proxy) o;

            if (this.cores != null ? !this.cores.equals(that.cores) : that.cores != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceFamilyLevel != null ? !this.instanceFamilyLevel.equals(that.instanceFamilyLevel) : that.instanceFamilyLevel != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.instanceTypeFamilies != null ? !this.instanceTypeFamilies.equals(that.instanceTypeFamilies) : that.instanceTypeFamilies != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.maxPrice != null ? !this.maxPrice.equals(that.maxPrice) : that.maxPrice != null) return false;
            if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
            if (this.priorityStrategy != null ? !this.priorityStrategy.equals(that.priorityStrategy) : that.priorityStrategy != null) return false;
            if (this.scene != null ? !this.scene.equals(that.scene) : that.scene != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.systemDiskCategory != null ? !this.systemDiskCategory.equals(that.systemDiskCategory) : that.systemDiskCategory != null) return false;
            if (this.zoneId != null ? !this.zoneId.equals(that.zoneId) : that.zoneId != null) return false;
            return this.zoneMatchMode != null ? this.zoneMatchMode.equals(that.zoneMatchMode) : that.zoneMatchMode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.cores != null ? this.cores.hashCode() : 0;
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceFamilyLevel != null ? this.instanceFamilyLevel.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.instanceTypeFamilies != null ? this.instanceTypeFamilies.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.maxPrice != null ? this.maxPrice.hashCode() : 0);
            result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
            result = 31 * result + (this.priorityStrategy != null ? this.priorityStrategy.hashCode() : 0);
            result = 31 * result + (this.scene != null ? this.scene.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.systemDiskCategory != null ? this.systemDiskCategory.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            result = 31 * result + (this.zoneMatchMode != null ? this.zoneMatchMode.hashCode() : 0);
            return result;
        }
    }
}
