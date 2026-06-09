package com.aliyun.ros.cdk.cr;

/**
 * Properties for defining a <code>ScanRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T11:03:09.665Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cr.$Module.class, fqn = "@alicloud/ros-cdk-cr.ScanRuleProps")
@software.amazon.jsii.Jsii.Proxy(ScanRuleProps.Jsii$Proxy.class)
public interface ScanRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: ACR Instance ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRepoTagFilterPattern();

    /**
     * Property ruleName: The scan rule name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     * Property scanScope: The scan scope.
     * <p>
     * Valid values:
     * NAMESPACE: namespace.
     * REPO: repository.
     * INSTANCE: CR instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScanScope();

    /**
     * Property scanType: The scan type.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>VUL: Products Cloud Security Scanner.</li>
     * <li>SBOM: Product Content Analysis.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScanType();

    /**
     * Property triggerType: Trigger type.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>AUTO: automatically trigger.</li>
     * <li>MANUAL: manually trigger.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTriggerType();

    /**
     * Property namespaces: The list of namespaces.
     * <p>
     * <ul>
     * <li>When the scan scope is NAMESPACE, this parameter cannot be empty.</li>
     * <li>If the scan scope is REPO, you must specify a unique Namespace for this parameter.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaces() {
        return null;
    }

    /**
     * Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRepoNames() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ScanRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ScanRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ScanRuleProps> {
        java.lang.Object instanceId;
        java.lang.Object repoTagFilterPattern;
        java.lang.Object ruleName;
        java.lang.Object scanScope;
        java.lang.Object scanType;
        java.lang.Object triggerType;
        java.lang.Object namespaces;
        java.lang.Object repoNames;

        /**
         * Sets the value of {@link ScanRuleProps#getInstanceId}
         * @param instanceId Property instanceId: ACR Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getInstanceId}
         * @param instanceId Property instanceId: ACR Instance ID. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getRepoTagFilterPattern}
         * @param repoTagFilterPattern Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression. This parameter is required.
         * @return {@code this}
         */
        public Builder repoTagFilterPattern(java.lang.String repoTagFilterPattern) {
            this.repoTagFilterPattern = repoTagFilterPattern;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getRepoTagFilterPattern}
         * @param repoTagFilterPattern Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression. This parameter is required.
         * @return {@code this}
         */
        public Builder repoTagFilterPattern(com.aliyun.ros.cdk.core.IResolvable repoTagFilterPattern) {
            this.repoTagFilterPattern = repoTagFilterPattern;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getRuleName}
         * @param ruleName Property ruleName: The scan rule name. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getRuleName}
         * @param ruleName Property ruleName: The scan rule name. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getScanScope}
         * @param scanScope Property scanScope: The scan scope. This parameter is required.
         *                  Valid values:
         *                  NAMESPACE: namespace.
         *                  REPO: repository.
         *                  INSTANCE: CR instance.
         * @return {@code this}
         */
        public Builder scanScope(java.lang.String scanScope) {
            this.scanScope = scanScope;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getScanScope}
         * @param scanScope Property scanScope: The scan scope. This parameter is required.
         *                  Valid values:
         *                  NAMESPACE: namespace.
         *                  REPO: repository.
         *                  INSTANCE: CR instance.
         * @return {@code this}
         */
        public Builder scanScope(com.aliyun.ros.cdk.core.IResolvable scanScope) {
            this.scanScope = scanScope;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getScanType}
         * @param scanType Property scanType: The scan type. This parameter is required.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li>VUL: Products Cloud Security Scanner.</li>
         *                 <li>SBOM: Product Content Analysis.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder scanType(java.lang.String scanType) {
            this.scanType = scanType;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getScanType}
         * @param scanType Property scanType: The scan type. This parameter is required.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li>VUL: Products Cloud Security Scanner.</li>
         *                 <li>SBOM: Product Content Analysis.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder scanType(com.aliyun.ros.cdk.core.IResolvable scanType) {
            this.scanType = scanType;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getTriggerType}
         * @param triggerType Property triggerType: Trigger type. This parameter is required.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>AUTO: automatically trigger.</li>
         *                    <li>MANUAL: manually trigger.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder triggerType(java.lang.String triggerType) {
            this.triggerType = triggerType;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getTriggerType}
         * @param triggerType Property triggerType: Trigger type. This parameter is required.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li>AUTO: automatically trigger.</li>
         *                    <li>MANUAL: manually trigger.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder triggerType(com.aliyun.ros.cdk.core.IResolvable triggerType) {
            this.triggerType = triggerType;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getNamespaces}
         * @param namespaces Property namespaces: The list of namespaces.
         *                   <ul>
         *                   <li>When the scan scope is NAMESPACE, this parameter cannot be empty.</li>
         *                   <li>If the scan scope is REPO, you must specify a unique Namespace for this parameter.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder namespaces(com.aliyun.ros.cdk.core.IResolvable namespaces) {
            this.namespaces = namespaces;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getNamespaces}
         * @param namespaces Property namespaces: The list of namespaces.
         *                   <ul>
         *                   <li>When the scan scope is NAMESPACE, this parameter cannot be empty.</li>
         *                   <li>If the scan scope is REPO, you must specify a unique Namespace for this parameter.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder namespaces(java.util.List<? extends java.lang.Object> namespaces) {
            this.namespaces = namespaces;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getRepoNames}
         * @param repoNames Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty.
         * @return {@code this}
         */
        public Builder repoNames(com.aliyun.ros.cdk.core.IResolvable repoNames) {
            this.repoNames = repoNames;
            return this;
        }

        /**
         * Sets the value of {@link ScanRuleProps#getRepoNames}
         * @param repoNames Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty.
         * @return {@code this}
         */
        public Builder repoNames(java.util.List<? extends java.lang.Object> repoNames) {
            this.repoNames = repoNames;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ScanRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ScanRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ScanRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ScanRuleProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object repoTagFilterPattern;
        private final java.lang.Object ruleName;
        private final java.lang.Object scanScope;
        private final java.lang.Object scanType;
        private final java.lang.Object triggerType;
        private final java.lang.Object namespaces;
        private final java.lang.Object repoNames;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoTagFilterPattern = software.amazon.jsii.Kernel.get(this, "repoTagFilterPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scanScope = software.amazon.jsii.Kernel.get(this, "scanScope", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scanType = software.amazon.jsii.Kernel.get(this, "scanType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.triggerType = software.amazon.jsii.Kernel.get(this, "triggerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaces = software.amazon.jsii.Kernel.get(this, "namespaces", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.repoNames = software.amazon.jsii.Kernel.get(this, "repoNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.repoTagFilterPattern = java.util.Objects.requireNonNull(builder.repoTagFilterPattern, "repoTagFilterPattern is required");
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.scanScope = java.util.Objects.requireNonNull(builder.scanScope, "scanScope is required");
            this.scanType = java.util.Objects.requireNonNull(builder.scanType, "scanType is required");
            this.triggerType = java.util.Objects.requireNonNull(builder.triggerType, "triggerType is required");
            this.namespaces = builder.namespaces;
            this.repoNames = builder.repoNames;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getRepoTagFilterPattern() {
            return this.repoTagFilterPattern;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getScanScope() {
            return this.scanScope;
        }

        @Override
        public final java.lang.Object getScanType() {
            return this.scanType;
        }

        @Override
        public final java.lang.Object getTriggerType() {
            return this.triggerType;
        }

        @Override
        public final java.lang.Object getNamespaces() {
            return this.namespaces;
        }

        @Override
        public final java.lang.Object getRepoNames() {
            return this.repoNames;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("repoTagFilterPattern", om.valueToTree(this.getRepoTagFilterPattern()));
            data.set("ruleName", om.valueToTree(this.getRuleName()));
            data.set("scanScope", om.valueToTree(this.getScanScope()));
            data.set("scanType", om.valueToTree(this.getScanType()));
            data.set("triggerType", om.valueToTree(this.getTriggerType()));
            if (this.getNamespaces() != null) {
                data.set("namespaces", om.valueToTree(this.getNamespaces()));
            }
            if (this.getRepoNames() != null) {
                data.set("repoNames", om.valueToTree(this.getRepoNames()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cr.ScanRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ScanRuleProps.Jsii$Proxy that = (ScanRuleProps.Jsii$Proxy) o;

            if (!instanceId.equals(that.instanceId)) return false;
            if (!repoTagFilterPattern.equals(that.repoTagFilterPattern)) return false;
            if (!ruleName.equals(that.ruleName)) return false;
            if (!scanScope.equals(that.scanScope)) return false;
            if (!scanType.equals(that.scanType)) return false;
            if (!triggerType.equals(that.triggerType)) return false;
            if (this.namespaces != null ? !this.namespaces.equals(that.namespaces) : that.namespaces != null) return false;
            return this.repoNames != null ? this.repoNames.equals(that.repoNames) : that.repoNames == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId.hashCode();
            result = 31 * result + (this.repoTagFilterPattern.hashCode());
            result = 31 * result + (this.ruleName.hashCode());
            result = 31 * result + (this.scanScope.hashCode());
            result = 31 * result + (this.scanType.hashCode());
            result = 31 * result + (this.triggerType.hashCode());
            result = 31 * result + (this.namespaces != null ? this.namespaces.hashCode() : 0);
            result = 31 * result + (this.repoNames != null ? this.repoNames.hashCode() : 0);
            return result;
        }
    }
}
