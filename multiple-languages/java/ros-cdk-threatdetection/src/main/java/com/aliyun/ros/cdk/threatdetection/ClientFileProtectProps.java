package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>ClientFileProtect</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-clientfileprotect
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.509Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.ClientFileProtectProps")
@software.amazon.jsii.Jsii.Proxy(ClientFileProtectProps.Jsii$Proxy.class)
public interface ClientFileProtectProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property fileOps: The operations that you want to perform on the files.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileOps();

    /**
     * Property filePaths: The paths to the monitored files.
     * <p>
     * Wildcard characters are supported.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFilePaths();

    /**
     * Property procPaths: The paths to the monitored processes.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProcPaths();

    /**
     * Property ruleAction: The handling method of the rule.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>pass: allow</li>
     * <li>alert.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleAction();

    /**
     * Property ruleName: The name of the rule.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRuleName();

    /**
     * Property alertLevel: The severity of alerts.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>0: does not generate alerts</li>
     * <li>1: sends notifications</li>
     * <li>2: suspicious</li>
     * <li>3: high-risk.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlertLevel() {
        return null;
    }

    /**
     * Property platform: The type of the operating system.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>windows</strong>: Windows</li>
     * <li><strong>linux</strong>: Linux.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPlatform() {
        return null;
    }

    /**
     * Property status: Rule status.
     * <p>
     * 1: Enabled
     * 0: Not enabled
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStatus() {
        return null;
    }

    /**
     * Property switchId: The switch ID of the rule.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSwitchId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ClientFileProtectProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ClientFileProtectProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ClientFileProtectProps> {
        java.lang.Object fileOps;
        java.lang.Object filePaths;
        java.lang.Object procPaths;
        java.lang.Object ruleAction;
        java.lang.Object ruleName;
        java.lang.Object alertLevel;
        java.lang.Object platform;
        java.lang.Object status;
        java.lang.Object switchId;

        /**
         * Sets the value of {@link ClientFileProtectProps#getFileOps}
         * @param fileOps Property fileOps: The operations that you want to perform on the files. This parameter is required.
         * @return {@code this}
         */
        public Builder fileOps(com.aliyun.ros.cdk.core.IResolvable fileOps) {
            this.fileOps = fileOps;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getFileOps}
         * @param fileOps Property fileOps: The operations that you want to perform on the files. This parameter is required.
         * @return {@code this}
         */
        public Builder fileOps(java.util.List<? extends java.lang.Object> fileOps) {
            this.fileOps = fileOps;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getFilePaths}
         * @param filePaths Property filePaths: The paths to the monitored files. This parameter is required.
         *                  Wildcard characters are supported.
         * @return {@code this}
         */
        public Builder filePaths(com.aliyun.ros.cdk.core.IResolvable filePaths) {
            this.filePaths = filePaths;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getFilePaths}
         * @param filePaths Property filePaths: The paths to the monitored files. This parameter is required.
         *                  Wildcard characters are supported.
         * @return {@code this}
         */
        public Builder filePaths(java.util.List<? extends java.lang.Object> filePaths) {
            this.filePaths = filePaths;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getProcPaths}
         * @param procPaths Property procPaths: The paths to the monitored processes. This parameter is required.
         * @return {@code this}
         */
        public Builder procPaths(com.aliyun.ros.cdk.core.IResolvable procPaths) {
            this.procPaths = procPaths;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getProcPaths}
         * @param procPaths Property procPaths: The paths to the monitored processes. This parameter is required.
         * @return {@code this}
         */
        public Builder procPaths(java.util.List<? extends java.lang.Object> procPaths) {
            this.procPaths = procPaths;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getRuleAction}
         * @param ruleAction Property ruleAction: The handling method of the rule. This parameter is required.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>pass: allow</li>
         *                   <li>alert.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleAction(java.lang.String ruleAction) {
            this.ruleAction = ruleAction;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getRuleAction}
         * @param ruleAction Property ruleAction: The handling method of the rule. This parameter is required.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>pass: allow</li>
         *                   <li>alert.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder ruleAction(com.aliyun.ros.cdk.core.IResolvable ruleAction) {
            this.ruleAction = ruleAction;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getRuleName}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getRuleName}
         * @param ruleName Property ruleName: The name of the rule. This parameter is required.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getAlertLevel}
         * @param alertLevel Property alertLevel: The severity of alerts.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>0: does not generate alerts</li>
         *                   <li>1: sends notifications</li>
         *                   <li>2: suspicious</li>
         *                   <li>3: high-risk.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder alertLevel(java.lang.Number alertLevel) {
            this.alertLevel = alertLevel;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getAlertLevel}
         * @param alertLevel Property alertLevel: The severity of alerts.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>0: does not generate alerts</li>
         *                   <li>1: sends notifications</li>
         *                   <li>2: suspicious</li>
         *                   <li>3: high-risk.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder alertLevel(com.aliyun.ros.cdk.core.IResolvable alertLevel) {
            this.alertLevel = alertLevel;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getPlatform}
         * @param platform Property platform: The type of the operating system.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li><strong>windows</strong>: Windows</li>
         *                 <li><strong>linux</strong>: Linux.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder platform(java.lang.String platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getPlatform}
         * @param platform Property platform: The type of the operating system.
         *                 Valid values:
         *                 <p>
         *                 <ul>
         *                 <li><strong>windows</strong>: Windows</li>
         *                 <li><strong>linux</strong>: Linux.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder platform(com.aliyun.ros.cdk.core.IResolvable platform) {
            this.platform = platform;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getStatus}
         * @param status Property status: Rule status.
         *               1: Enabled
         *               0: Not enabled
         * @return {@code this}
         */
        public Builder status(java.lang.Number status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getStatus}
         * @param status Property status: Rule status.
         *               1: Enabled
         *               0: Not enabled
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getSwitchId}
         * @param switchId Property switchId: The switch ID of the rule.
         * @return {@code this}
         */
        public Builder switchId(java.lang.String switchId) {
            this.switchId = switchId;
            return this;
        }

        /**
         * Sets the value of {@link ClientFileProtectProps#getSwitchId}
         * @param switchId Property switchId: The switch ID of the rule.
         * @return {@code this}
         */
        public Builder switchId(com.aliyun.ros.cdk.core.IResolvable switchId) {
            this.switchId = switchId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ClientFileProtectProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ClientFileProtectProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ClientFileProtectProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ClientFileProtectProps {
        private final java.lang.Object fileOps;
        private final java.lang.Object filePaths;
        private final java.lang.Object procPaths;
        private final java.lang.Object ruleAction;
        private final java.lang.Object ruleName;
        private final java.lang.Object alertLevel;
        private final java.lang.Object platform;
        private final java.lang.Object status;
        private final java.lang.Object switchId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fileOps = software.amazon.jsii.Kernel.get(this, "fileOps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filePaths = software.amazon.jsii.Kernel.get(this, "filePaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.procPaths = software.amazon.jsii.Kernel.get(this, "procPaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleAction = software.amazon.jsii.Kernel.get(this, "ruleAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.alertLevel = software.amazon.jsii.Kernel.get(this, "alertLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.platform = software.amazon.jsii.Kernel.get(this, "platform", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.switchId = software.amazon.jsii.Kernel.get(this, "switchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fileOps = java.util.Objects.requireNonNull(builder.fileOps, "fileOps is required");
            this.filePaths = java.util.Objects.requireNonNull(builder.filePaths, "filePaths is required");
            this.procPaths = java.util.Objects.requireNonNull(builder.procPaths, "procPaths is required");
            this.ruleAction = java.util.Objects.requireNonNull(builder.ruleAction, "ruleAction is required");
            this.ruleName = java.util.Objects.requireNonNull(builder.ruleName, "ruleName is required");
            this.alertLevel = builder.alertLevel;
            this.platform = builder.platform;
            this.status = builder.status;
            this.switchId = builder.switchId;
        }

        @Override
        public final java.lang.Object getFileOps() {
            return this.fileOps;
        }

        @Override
        public final java.lang.Object getFilePaths() {
            return this.filePaths;
        }

        @Override
        public final java.lang.Object getProcPaths() {
            return this.procPaths;
        }

        @Override
        public final java.lang.Object getRuleAction() {
            return this.ruleAction;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getAlertLevel() {
            return this.alertLevel;
        }

        @Override
        public final java.lang.Object getPlatform() {
            return this.platform;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
        }

        @Override
        public final java.lang.Object getSwitchId() {
            return this.switchId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fileOps", om.valueToTree(this.getFileOps()));
            data.set("filePaths", om.valueToTree(this.getFilePaths()));
            data.set("procPaths", om.valueToTree(this.getProcPaths()));
            data.set("ruleAction", om.valueToTree(this.getRuleAction()));
            data.set("ruleName", om.valueToTree(this.getRuleName()));
            if (this.getAlertLevel() != null) {
                data.set("alertLevel", om.valueToTree(this.getAlertLevel()));
            }
            if (this.getPlatform() != null) {
                data.set("platform", om.valueToTree(this.getPlatform()));
            }
            if (this.getStatus() != null) {
                data.set("status", om.valueToTree(this.getStatus()));
            }
            if (this.getSwitchId() != null) {
                data.set("switchId", om.valueToTree(this.getSwitchId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.ClientFileProtectProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ClientFileProtectProps.Jsii$Proxy that = (ClientFileProtectProps.Jsii$Proxy) o;

            if (!fileOps.equals(that.fileOps)) return false;
            if (!filePaths.equals(that.filePaths)) return false;
            if (!procPaths.equals(that.procPaths)) return false;
            if (!ruleAction.equals(that.ruleAction)) return false;
            if (!ruleName.equals(that.ruleName)) return false;
            if (this.alertLevel != null ? !this.alertLevel.equals(that.alertLevel) : that.alertLevel != null) return false;
            if (this.platform != null ? !this.platform.equals(that.platform) : that.platform != null) return false;
            if (this.status != null ? !this.status.equals(that.status) : that.status != null) return false;
            return this.switchId != null ? this.switchId.equals(that.switchId) : that.switchId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fileOps.hashCode();
            result = 31 * result + (this.filePaths.hashCode());
            result = 31 * result + (this.procPaths.hashCode());
            result = 31 * result + (this.ruleAction.hashCode());
            result = 31 * result + (this.ruleName.hashCode());
            result = 31 * result + (this.alertLevel != null ? this.alertLevel.hashCode() : 0);
            result = 31 * result + (this.platform != null ? this.platform.hashCode() : 0);
            result = 31 * result + (this.status != null ? this.status.hashCode() : 0);
            result = 31 * result + (this.switchId != null ? this.switchId.hashCode() : 0);
            return result;
        }
    }
}
