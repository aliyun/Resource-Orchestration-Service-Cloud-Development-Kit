package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>CustomCheckStandardPolicy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckstandardpolicy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.603Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.CustomCheckStandardPolicyProps")
@software.amazon.jsii.Jsii.Proxy(CustomCheckStandardPolicyProps.Jsii$Proxy.class)
public interface CustomCheckStandardPolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property policyShowName: The name of the custom policy.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyShowName();

    /**
     * Property policyType: The category type of the custom check policy: - STANDARD: standard.
     * <p>
     * <ul>
     * <li>REQUIREMENT: requirement.</li>
     * <li>SECTION: section.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyType();

    /**
     * Property dependentPolicyId: The ID of the parent policy.
     * <p>
     * (Dependency order from low to high: Section -&gt; Requirement -&gt; Standard)
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDependentPolicyId() {
        return null;
    }

    /**
     * Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM).
     * <p>
     * <ul>
     * <li>IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).</li>
     * <li>RISK: Security Risk.</li>
     * <li>COMPLIANCE: Compliance Risk.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link CustomCheckStandardPolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CustomCheckStandardPolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CustomCheckStandardPolicyProps> {
        java.lang.Object policyShowName;
        java.lang.Object policyType;
        java.lang.Object dependentPolicyId;
        java.lang.Object type;

        /**
         * Sets the value of {@link CustomCheckStandardPolicyProps#getPolicyShowName}
         * @param policyShowName Property policyShowName: The name of the custom policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyShowName(java.lang.String policyShowName) {
            this.policyShowName = policyShowName;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckStandardPolicyProps#getPolicyShowName}
         * @param policyShowName Property policyShowName: The name of the custom policy. This parameter is required.
         * @return {@code this}
         */
        public Builder policyShowName(com.aliyun.ros.cdk.core.IResolvable policyShowName) {
            this.policyShowName = policyShowName;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckStandardPolicyProps#getPolicyType}
         * @param policyType Property policyType: The category type of the custom check policy: - STANDARD: standard. This parameter is required.
         *                   <ul>
         *                   <li>REQUIREMENT: requirement.</li>
         *                   <li>SECTION: section.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder policyType(java.lang.String policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckStandardPolicyProps#getPolicyType}
         * @param policyType Property policyType: The category type of the custom check policy: - STANDARD: standard. This parameter is required.
         *                   <ul>
         *                   <li>REQUIREMENT: requirement.</li>
         *                   <li>SECTION: section.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder policyType(com.aliyun.ros.cdk.core.IResolvable policyType) {
            this.policyType = policyType;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckStandardPolicyProps#getDependentPolicyId}
         * @param dependentPolicyId Property dependentPolicyId: The ID of the parent policy.
         *                          (Dependency order from low to high: Section -&gt; Requirement -&gt; Standard)
         * @return {@code this}
         */
        public Builder dependentPolicyId(java.lang.Number dependentPolicyId) {
            this.dependentPolicyId = dependentPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckStandardPolicyProps#getDependentPolicyId}
         * @param dependentPolicyId Property dependentPolicyId: The ID of the parent policy.
         *                          (Dependency order from low to high: Section -&gt; Requirement -&gt; Standard)
         * @return {@code this}
         */
        public Builder dependentPolicyId(com.aliyun.ros.cdk.core.IResolvable dependentPolicyId) {
            this.dependentPolicyId = dependentPolicyId;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckStandardPolicyProps#getType}
         * @param type Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM).
         *             <ul>
         *             <li>IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).</li>
         *             <li>RISK: Security Risk.</li>
         *             <li>COMPLIANCE: Compliance Risk.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link CustomCheckStandardPolicyProps#getType}
         * @param type Property type: The category name of the associated policy (required when PolicyType is STANDARD): - AISPM: AI Security Posture Management (AISPM).
         *             <ul>
         *             <li>IDENTITY_PERMISSION: Identity and Entitlement Management (CIEM).</li>
         *             <li>RISK: Security Risk.</li>
         *             <li>COMPLIANCE: Compliance Risk.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CustomCheckStandardPolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CustomCheckStandardPolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CustomCheckStandardPolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CustomCheckStandardPolicyProps {
        private final java.lang.Object policyShowName;
        private final java.lang.Object policyType;
        private final java.lang.Object dependentPolicyId;
        private final java.lang.Object type;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.policyShowName = software.amazon.jsii.Kernel.get(this, "policyShowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyType = software.amazon.jsii.Kernel.get(this, "policyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dependentPolicyId = software.amazon.jsii.Kernel.get(this, "dependentPolicyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.policyShowName = java.util.Objects.requireNonNull(builder.policyShowName, "policyShowName is required");
            this.policyType = java.util.Objects.requireNonNull(builder.policyType, "policyType is required");
            this.dependentPolicyId = builder.dependentPolicyId;
            this.type = builder.type;
        }

        @Override
        public final java.lang.Object getPolicyShowName() {
            return this.policyShowName;
        }

        @Override
        public final java.lang.Object getPolicyType() {
            return this.policyType;
        }

        @Override
        public final java.lang.Object getDependentPolicyId() {
            return this.dependentPolicyId;
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

            data.set("policyShowName", om.valueToTree(this.getPolicyShowName()));
            data.set("policyType", om.valueToTree(this.getPolicyType()));
            if (this.getDependentPolicyId() != null) {
                data.set("dependentPolicyId", om.valueToTree(this.getDependentPolicyId()));
            }
            if (this.getType() != null) {
                data.set("type", om.valueToTree(this.getType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.CustomCheckStandardPolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CustomCheckStandardPolicyProps.Jsii$Proxy that = (CustomCheckStandardPolicyProps.Jsii$Proxy) o;

            if (!policyShowName.equals(that.policyShowName)) return false;
            if (!policyType.equals(that.policyType)) return false;
            if (this.dependentPolicyId != null ? !this.dependentPolicyId.equals(that.dependentPolicyId) : that.dependentPolicyId != null) return false;
            return this.type != null ? this.type.equals(that.type) : that.type == null;
        }

        @Override
        public final int hashCode() {
            int result = this.policyShowName.hashCode();
            result = 31 * result + (this.policyType.hashCode());
            result = 31 * result + (this.dependentPolicyId != null ? this.dependentPolicyId.hashCode() : 0);
            result = 31 * result + (this.type != null ? this.type.hashCode() : 0);
            return result;
        }
    }
}
