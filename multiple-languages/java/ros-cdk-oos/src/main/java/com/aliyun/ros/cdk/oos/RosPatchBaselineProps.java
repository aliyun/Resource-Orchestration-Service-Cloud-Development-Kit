package com.aliyun.ros.cdk.oos;

/**
 * Properties for defining a <code>RosPatchBaseline</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-patchbaseline
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:29.822Z")
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
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
        java.lang.Object description;

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
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.approvalRules = software.amazon.jsii.Kernel.get(this, "approvalRules", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.operationSystem = software.amazon.jsii.Kernel.get(this, "operationSystem", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.patchBaselineName = software.amazon.jsii.Kernel.get(this, "patchBaselineName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.approvalRules = java.util.Objects.requireNonNull(builder.approvalRules, "approvalRules is required");
            this.operationSystem = java.util.Objects.requireNonNull(builder.operationSystem, "operationSystem is required");
            this.patchBaselineName = java.util.Objects.requireNonNull(builder.patchBaselineName, "patchBaselineName is required");
            this.description = builder.description;
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
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("approvalRules", om.valueToTree(this.getApprovalRules()));
            data.set("operationSystem", om.valueToTree(this.getOperationSystem()));
            data.set("patchBaselineName", om.valueToTree(this.getPatchBaselineName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
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
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.approvalRules.hashCode();
            result = 31 * result + (this.operationSystem.hashCode());
            result = 31 * result + (this.patchBaselineName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
