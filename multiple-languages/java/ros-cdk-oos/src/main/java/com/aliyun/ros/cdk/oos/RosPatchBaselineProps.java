package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>RosPatchBaseline</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.419Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.oos.$Module.class, fqn = "@alicloud/ros-cdk-oos.RosPatchBaselineProps")
@software.amazon.jsii.Jsii.Proxy(RosPatchBaselineProps.Jsii$Proxy.class)
public interface RosPatchBaselineProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getApprovalRules();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOperationSystem();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPatchBaselineName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApprovedPatches() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApprovedPatchesEnableNonSecurity() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRejectedPatches() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRejectedPatchesAction() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSources() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.oos.RosPatchBaseline.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosPatchBaselineProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosPatchBaselineProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosPatchBaselineProps> {
        java.lang.Object approvalRules;
        java.lang.Object operationSystem;
        java.lang.Object patchBaselineName;
        java.lang.Object approvedPatches;
        java.lang.Object approvedPatchesEnableNonSecurity;
        java.lang.Object description;
        java.lang.Object rejectedPatches;
        java.lang.Object rejectedPatchesAction;
        java.lang.Object resourceGroupId;
        java.lang.Object sources;
        java.util.List<com.aliyun.ros.cdk.oos.RosPatchBaseline.TagsProperty> tags;

        /**
         * Sets the value of {@link RosPatchBaselineProps#getApprovalRules}
         * @param approvalRules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder approvalRules(com.aliyun.ros.cdk.core.IResolvable approvalRules) {
            this.approvalRules = approvalRules;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getApprovalRules}
         * @param approvalRules the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder approvalRules(java.util.Map<java.lang.String, ? extends java.lang.Object> approvalRules) {
            this.approvalRules = approvalRules;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getOperationSystem}
         * @param operationSystem the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder operationSystem(java.lang.String operationSystem) {
            this.operationSystem = operationSystem;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getOperationSystem}
         * @param operationSystem the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder operationSystem(com.aliyun.ros.cdk.core.IResolvable operationSystem) {
            this.operationSystem = operationSystem;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getPatchBaselineName}
         * @param patchBaselineName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder patchBaselineName(java.lang.String patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getPatchBaselineName}
         * @param patchBaselineName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder patchBaselineName(com.aliyun.ros.cdk.core.IResolvable patchBaselineName) {
            this.patchBaselineName = patchBaselineName;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getApprovedPatches}
         * @param approvedPatches the value to be set.
         * @return {@code this}
         */
        public Builder approvedPatches(com.aliyun.ros.cdk.core.IResolvable approvedPatches) {
            this.approvedPatches = approvedPatches;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getApprovedPatches}
         * @param approvedPatches the value to be set.
         * @return {@code this}
         */
        public Builder approvedPatches(java.util.List<? extends java.lang.Object> approvedPatches) {
            this.approvedPatches = approvedPatches;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getApprovedPatchesEnableNonSecurity}
         * @param approvedPatchesEnableNonSecurity the value to be set.
         * @return {@code this}
         */
        public Builder approvedPatchesEnableNonSecurity(java.lang.Boolean approvedPatchesEnableNonSecurity) {
            this.approvedPatchesEnableNonSecurity = approvedPatchesEnableNonSecurity;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getApprovedPatchesEnableNonSecurity}
         * @param approvedPatchesEnableNonSecurity the value to be set.
         * @return {@code this}
         */
        public Builder approvedPatchesEnableNonSecurity(com.aliyun.ros.cdk.core.IResolvable approvedPatchesEnableNonSecurity) {
            this.approvedPatchesEnableNonSecurity = approvedPatchesEnableNonSecurity;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getRejectedPatches}
         * @param rejectedPatches the value to be set.
         * @return {@code this}
         */
        public Builder rejectedPatches(com.aliyun.ros.cdk.core.IResolvable rejectedPatches) {
            this.rejectedPatches = rejectedPatches;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getRejectedPatches}
         * @param rejectedPatches the value to be set.
         * @return {@code this}
         */
        public Builder rejectedPatches(java.util.List<? extends java.lang.Object> rejectedPatches) {
            this.rejectedPatches = rejectedPatches;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getRejectedPatchesAction}
         * @param rejectedPatchesAction the value to be set.
         * @return {@code this}
         */
        public Builder rejectedPatchesAction(java.lang.String rejectedPatchesAction) {
            this.rejectedPatchesAction = rejectedPatchesAction;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getRejectedPatchesAction}
         * @param rejectedPatchesAction the value to be set.
         * @return {@code this}
         */
        public Builder rejectedPatchesAction(com.aliyun.ros.cdk.core.IResolvable rejectedPatchesAction) {
            this.rejectedPatchesAction = rejectedPatchesAction;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getSources}
         * @param sources the value to be set.
         * @return {@code this}
         */
        public Builder sources(com.aliyun.ros.cdk.core.IResolvable sources) {
            this.sources = sources;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getSources}
         * @param sources the value to be set.
         * @return {@code this}
         */
        public Builder sources(java.util.List<? extends java.lang.Object> sources) {
            this.sources = sources;
            return this;
        }

        /**
         * Sets the value of {@link RosPatchBaselineProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.oos.RosPatchBaseline.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.oos.RosPatchBaseline.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosPatchBaselineProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosPatchBaselineProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosPatchBaselineProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosPatchBaselineProps {
        private final java.lang.Object approvalRules;
        private final java.lang.Object operationSystem;
        private final java.lang.Object patchBaselineName;
        private final java.lang.Object approvedPatches;
        private final java.lang.Object approvedPatchesEnableNonSecurity;
        private final java.lang.Object description;
        private final java.lang.Object rejectedPatches;
        private final java.lang.Object rejectedPatchesAction;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object sources;
        private final java.util.List<com.aliyun.ros.cdk.oos.RosPatchBaseline.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.approvalRules = software.amazon.jsii.Kernel.get(this, "approvalRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.operationSystem = software.amazon.jsii.Kernel.get(this, "operationSystem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.patchBaselineName = software.amazon.jsii.Kernel.get(this, "patchBaselineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.approvedPatches = software.amazon.jsii.Kernel.get(this, "approvedPatches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.approvedPatchesEnableNonSecurity = software.amazon.jsii.Kernel.get(this, "approvedPatchesEnableNonSecurity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rejectedPatches = software.amazon.jsii.Kernel.get(this, "rejectedPatches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rejectedPatchesAction = software.amazon.jsii.Kernel.get(this, "rejectedPatchesAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sources = software.amazon.jsii.Kernel.get(this, "sources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.oos.RosPatchBaseline.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.approvalRules = java.util.Objects.requireNonNull(builder.approvalRules, "approvalRules is required");
            this.operationSystem = java.util.Objects.requireNonNull(builder.operationSystem, "operationSystem is required");
            this.patchBaselineName = java.util.Objects.requireNonNull(builder.patchBaselineName, "patchBaselineName is required");
            this.approvedPatches = builder.approvedPatches;
            this.approvedPatchesEnableNonSecurity = builder.approvedPatchesEnableNonSecurity;
            this.description = builder.description;
            this.rejectedPatches = builder.rejectedPatches;
            this.rejectedPatchesAction = builder.rejectedPatchesAction;
            this.resourceGroupId = builder.resourceGroupId;
            this.sources = builder.sources;
            this.tags = (java.util.List<com.aliyun.ros.cdk.oos.RosPatchBaseline.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getApprovalRules() {
            return this.approvalRules;
        }

        @Override
        public final java.lang.Object getOperationSystem() {
            return this.operationSystem;
        }

        @Override
        public final java.lang.Object getPatchBaselineName() {
            return this.patchBaselineName;
        }

        @Override
        public final java.lang.Object getApprovedPatches() {
            return this.approvedPatches;
        }

        @Override
        public final java.lang.Object getApprovedPatchesEnableNonSecurity() {
            return this.approvedPatchesEnableNonSecurity;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getRejectedPatches() {
            return this.rejectedPatches;
        }

        @Override
        public final java.lang.Object getRejectedPatchesAction() {
            return this.rejectedPatchesAction;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSources() {
            return this.sources;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.oos.RosPatchBaseline.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("approvalRules", om.valueToTree(this.getApprovalRules()));
            data.set("operationSystem", om.valueToTree(this.getOperationSystem()));
            data.set("patchBaselineName", om.valueToTree(this.getPatchBaselineName()));
            if (this.getApprovedPatches() != null) {
                data.set("approvedPatches", om.valueToTree(this.getApprovedPatches()));
            }
            if (this.getApprovedPatchesEnableNonSecurity() != null) {
                data.set("approvedPatchesEnableNonSecurity", om.valueToTree(this.getApprovedPatchesEnableNonSecurity()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getRejectedPatches() != null) {
                data.set("rejectedPatches", om.valueToTree(this.getRejectedPatches()));
            }
            if (this.getRejectedPatchesAction() != null) {
                data.set("rejectedPatchesAction", om.valueToTree(this.getRejectedPatchesAction()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSources() != null) {
                data.set("sources", om.valueToTree(this.getSources()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-oos.RosPatchBaselineProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosPatchBaselineProps.Jsii$Proxy that = (RosPatchBaselineProps.Jsii$Proxy) o;

            if (!approvalRules.equals(that.approvalRules)) return false;
            if (!operationSystem.equals(that.operationSystem)) return false;
            if (!patchBaselineName.equals(that.patchBaselineName)) return false;
            if (this.approvedPatches != null ? !this.approvedPatches.equals(that.approvedPatches) : that.approvedPatches != null) return false;
            if (this.approvedPatchesEnableNonSecurity != null ? !this.approvedPatchesEnableNonSecurity.equals(that.approvedPatchesEnableNonSecurity) : that.approvedPatchesEnableNonSecurity != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.rejectedPatches != null ? !this.rejectedPatches.equals(that.rejectedPatches) : that.rejectedPatches != null) return false;
            if (this.rejectedPatchesAction != null ? !this.rejectedPatchesAction.equals(that.rejectedPatchesAction) : that.rejectedPatchesAction != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.sources != null ? !this.sources.equals(that.sources) : that.sources != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.approvalRules.hashCode();
            result = 31 * result + (this.operationSystem.hashCode());
            result = 31 * result + (this.patchBaselineName.hashCode());
            result = 31 * result + (this.approvedPatches != null ? this.approvedPatches.hashCode() : 0);
            result = 31 * result + (this.approvedPatchesEnableNonSecurity != null ? this.approvedPatchesEnableNonSecurity.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.rejectedPatches != null ? this.rejectedPatches.hashCode() : 0);
            result = 31 * result + (this.rejectedPatchesAction != null ? this.rejectedPatchesAction.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.sources != null ? this.sources.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
