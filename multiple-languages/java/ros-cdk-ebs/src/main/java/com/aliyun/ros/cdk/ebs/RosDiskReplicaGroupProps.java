package com.aliyun.ros.cdk.ebs;

/**
 * Properties for defining a <code>RosDiskReplicaGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicagroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:28.077Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.RosDiskReplicaGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosDiskReplicaGroupProps.Jsii$Proxy.class)
public interface RosDiskReplicaGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationZoneId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskReplicaGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRpo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaGroup.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDiskReplicaGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDiskReplicaGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDiskReplicaGroupProps> {
        java.lang.Object destinationRegionId;
        java.lang.Object destinationZoneId;
        java.lang.Object sourceRegionId;
        java.lang.Object sourceZoneId;
        java.lang.Object description;
        java.lang.Object diskReplicaGroupName;
        java.lang.Object resourceGroupId;
        java.lang.Object rpo;
        java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaGroup.TagsProperty> tags;

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getDestinationRegionId}
         * @param destinationRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationRegionId(java.lang.String destinationRegionId) {
            this.destinationRegionId = destinationRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getDestinationRegionId}
         * @param destinationRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationRegionId(com.aliyun.ros.cdk.core.IResolvable destinationRegionId) {
            this.destinationRegionId = destinationRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getDestinationZoneId}
         * @param destinationZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationZoneId(java.lang.String destinationZoneId) {
            this.destinationZoneId = destinationZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getDestinationZoneId}
         * @param destinationZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationZoneId(com.aliyun.ros.cdk.core.IResolvable destinationZoneId) {
            this.destinationZoneId = destinationZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getSourceRegionId}
         * @param sourceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceRegionId(java.lang.String sourceRegionId) {
            this.sourceRegionId = sourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getSourceRegionId}
         * @param sourceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceRegionId(com.aliyun.ros.cdk.core.IResolvable sourceRegionId) {
            this.sourceRegionId = sourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getSourceZoneId}
         * @param sourceZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceZoneId(java.lang.String sourceZoneId) {
            this.sourceZoneId = sourceZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getSourceZoneId}
         * @param sourceZoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceZoneId(com.aliyun.ros.cdk.core.IResolvable sourceZoneId) {
            this.sourceZoneId = sourceZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getDiskReplicaGroupName}
         * @param diskReplicaGroupName the value to be set.
         * @return {@code this}
         */
        public Builder diskReplicaGroupName(java.lang.String diskReplicaGroupName) {
            this.diskReplicaGroupName = diskReplicaGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getDiskReplicaGroupName}
         * @param diskReplicaGroupName the value to be set.
         * @return {@code this}
         */
        public Builder diskReplicaGroupName(com.aliyun.ros.cdk.core.IResolvable diskReplicaGroupName) {
            this.diskReplicaGroupName = diskReplicaGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getRpo}
         * @param rpo the value to be set.
         * @return {@code this}
         */
        public Builder rpo(java.lang.Number rpo) {
            this.rpo = rpo;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getRpo}
         * @param rpo the value to be set.
         * @return {@code this}
         */
        public Builder rpo(com.aliyun.ros.cdk.core.IResolvable rpo) {
            this.rpo = rpo;
            return this;
        }

        /**
         * Sets the value of {@link RosDiskReplicaGroupProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ebs.RosDiskReplicaGroup.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaGroup.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDiskReplicaGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDiskReplicaGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDiskReplicaGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDiskReplicaGroupProps {
        private final java.lang.Object destinationRegionId;
        private final java.lang.Object destinationZoneId;
        private final java.lang.Object sourceRegionId;
        private final java.lang.Object sourceZoneId;
        private final java.lang.Object description;
        private final java.lang.Object diskReplicaGroupName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object rpo;
        private final java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaGroup.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinationRegionId = software.amazon.jsii.Kernel.get(this, "destinationRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationZoneId = software.amazon.jsii.Kernel.get(this, "destinationZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceRegionId = software.amazon.jsii.Kernel.get(this, "sourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceZoneId = software.amazon.jsii.Kernel.get(this, "sourceZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskReplicaGroupName = software.amazon.jsii.Kernel.get(this, "diskReplicaGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rpo = software.amazon.jsii.Kernel.get(this, "rpo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.RosDiskReplicaGroup.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinationRegionId = java.util.Objects.requireNonNull(builder.destinationRegionId, "destinationRegionId is required");
            this.destinationZoneId = java.util.Objects.requireNonNull(builder.destinationZoneId, "destinationZoneId is required");
            this.sourceRegionId = java.util.Objects.requireNonNull(builder.sourceRegionId, "sourceRegionId is required");
            this.sourceZoneId = java.util.Objects.requireNonNull(builder.sourceZoneId, "sourceZoneId is required");
            this.description = builder.description;
            this.diskReplicaGroupName = builder.diskReplicaGroupName;
            this.resourceGroupId = builder.resourceGroupId;
            this.rpo = builder.rpo;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaGroup.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getDestinationRegionId() {
            return this.destinationRegionId;
        }

        @Override
        public final java.lang.Object getDestinationZoneId() {
            return this.destinationZoneId;
        }

        @Override
        public final java.lang.Object getSourceRegionId() {
            return this.sourceRegionId;
        }

        @Override
        public final java.lang.Object getSourceZoneId() {
            return this.sourceZoneId;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskReplicaGroupName() {
            return this.diskReplicaGroupName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRpo() {
            return this.rpo;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaGroup.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("destinationRegionId", om.valueToTree(this.getDestinationRegionId()));
            data.set("destinationZoneId", om.valueToTree(this.getDestinationZoneId()));
            data.set("sourceRegionId", om.valueToTree(this.getSourceRegionId()));
            data.set("sourceZoneId", om.valueToTree(this.getSourceZoneId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskReplicaGroupName() != null) {
                data.set("diskReplicaGroupName", om.valueToTree(this.getDiskReplicaGroupName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRpo() != null) {
                data.set("rpo", om.valueToTree(this.getRpo()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ebs.RosDiskReplicaGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDiskReplicaGroupProps.Jsii$Proxy that = (RosDiskReplicaGroupProps.Jsii$Proxy) o;

            if (!destinationRegionId.equals(that.destinationRegionId)) return false;
            if (!destinationZoneId.equals(that.destinationZoneId)) return false;
            if (!sourceRegionId.equals(that.sourceRegionId)) return false;
            if (!sourceZoneId.equals(that.sourceZoneId)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskReplicaGroupName != null ? !this.diskReplicaGroupName.equals(that.diskReplicaGroupName) : that.diskReplicaGroupName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.rpo != null ? !this.rpo.equals(that.rpo) : that.rpo != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.destinationRegionId.hashCode();
            result = 31 * result + (this.destinationZoneId.hashCode());
            result = 31 * result + (this.sourceRegionId.hashCode());
            result = 31 * result + (this.sourceZoneId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskReplicaGroupName != null ? this.diskReplicaGroupName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.rpo != null ? this.rpo.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
