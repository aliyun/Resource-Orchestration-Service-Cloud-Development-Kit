package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>VulWhitelist</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-vulwhitelist
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.585Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.VulWhitelistProps")
@software.amazon.jsii.Jsii.Proxy(VulWhitelistProps.Jsii$Proxy.class)
public interface VulWhitelistProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property targetInfo: The applicable scope of the whitelist.
     * <p>
     * The value of this parameter is in the JSON format and contains the following fields:
     * <p>
     * <ul>
     * <li><strong>type</strong>: the type of the applicable scope. Valid values:
     * <p>
     * <ul>
     * <li><strong>GroupId</strong>: the ID of a server group.</li>
     * <li><strong>Uuid</strong>: the UUID of a server.</li>
     * </ul></li>
     * <li><strong>uuids</strong>: the UUIDs of servers. This field is of the string type.</li>
     * <li><strong>groupIds</strong>: the IDs of server groups. This field is of the long type.</li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * If you leave this parameter empty, the applicable scope is all servers. If you set the <strong>type</strong> field to <strong>GroupId</strong>, you must also specify the <strong>groupIds</strong> field. If you set the <strong>type</strong> field to <strong>Uuid</strong>, you must also specify the <strong>uuids</strong> field.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTargetInfo();

    /**
     * Property whitelist: The information about the vulnerability that you want to add to the whitelist.
     * <p>
     * The value is a JSON string that contains the following fields:
     * <p>
     * <ul>
     * <li><strong>Status</strong>: the status of the vulnerability.</li>
     * <li><strong>GmtLast</strong>: the timestamp when the vulnerability was last detected. Unit: milliseconds.</li>
     * <li><strong>LaterCount</strong>: the number of vulnerabilities that have the medium priority.</li>
     * <li><strong>AsapCount</strong>: the number of vulnerabilities that have the high priority.</li>
     * <li><strong>Name</strong>: the name of the vulnerability.</li>
     * <li><strong>Type</strong>: the type of the vulnerability. Valid values:
     * <p>
     * <ul>
     * <li><strong>cve</strong>: Linux software vulnerability</li>
     * <li><strong>sys</strong>: Windows system vulnerability</li>
     * <li><strong>cms</strong>: Web-CMS vulnerability</li>
     * <li><strong>app</strong>: application vulnerability</li>
     * <li><strong>emg</strong>: urgent vulnerability</li>
     * </ul></li>
     * <li><strong>Related</strong>: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.</li>
     * <li><strong>HandledCount</strong>: the number of handled vulnerabilities.</li>
     * <li><strong>AliasName</strong>: the alias of the vulnerability.</li>
     * <li><strong>RuleModifyTime</strong>: the time when the vulnerability was last disclosed.</li>
     * <li><strong>NntfCount</strong>: the number of vulnerabilities that have the low priority.</li>
     * <li><strong>TotalFixCount</strong>: the total number of fixed vulnerabilities.</li>
     * <li><strong>Tags</strong>: the tag that is added to the vulnerability.</li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * You can call the <a href="~~DescribeGroupedVul~~">DescribeGroupedVul</a> operation to query the information about the vulnerability that you want to add to the whitelist.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWhitelist();

    /**
     * Property reason: The reason why you add the vulnerability to the whitelist.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReason() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link VulWhitelistProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link VulWhitelistProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<VulWhitelistProps> {
        java.lang.Object targetInfo;
        java.lang.Object whitelist;
        java.lang.Object reason;

        /**
         * Sets the value of {@link VulWhitelistProps#getTargetInfo}
         * @param targetInfo Property targetInfo: The applicable scope of the whitelist. This parameter is required.
         *                   The value of this parameter is in the JSON format and contains the following fields:
         *                   <p>
         *                   <ul>
         *                   <li><strong>type</strong>: the type of the applicable scope. Valid values:
         *                   <p>
         *                   <ul>
         *                   <li><strong>GroupId</strong>: the ID of a server group.</li>
         *                   <li><strong>Uuid</strong>: the UUID of a server.</li>
         *                   </ul></li>
         *                   <li><strong>uuids</strong>: the UUIDs of servers. This field is of the string type.</li>
         *                   <li><strong>groupIds</strong>: the IDs of server groups. This field is of the long type.</li>
         *                   </ul>
         *                   <p>
         *                   <blockquote>
         *                   <p>
         *                   If you leave this parameter empty, the applicable scope is all servers. If you set the <strong>type</strong> field to <strong>GroupId</strong>, you must also specify the <strong>groupIds</strong> field. If you set the <strong>type</strong> field to <strong>Uuid</strong>, you must also specify the <strong>uuids</strong> field.
         *                   <p>
         *                   </blockquote>
         * @return {@code this}
         */
        public Builder targetInfo(com.aliyun.ros.cdk.core.IResolvable targetInfo) {
            this.targetInfo = targetInfo;
            return this;
        }

        /**
         * Sets the value of {@link VulWhitelistProps#getTargetInfo}
         * @param targetInfo Property targetInfo: The applicable scope of the whitelist. This parameter is required.
         *                   The value of this parameter is in the JSON format and contains the following fields:
         *                   <p>
         *                   <ul>
         *                   <li><strong>type</strong>: the type of the applicable scope. Valid values:
         *                   <p>
         *                   <ul>
         *                   <li><strong>GroupId</strong>: the ID of a server group.</li>
         *                   <li><strong>Uuid</strong>: the UUID of a server.</li>
         *                   </ul></li>
         *                   <li><strong>uuids</strong>: the UUIDs of servers. This field is of the string type.</li>
         *                   <li><strong>groupIds</strong>: the IDs of server groups. This field is of the long type.</li>
         *                   </ul>
         *                   <p>
         *                   <blockquote>
         *                   <p>
         *                   If you leave this parameter empty, the applicable scope is all servers. If you set the <strong>type</strong> field to <strong>GroupId</strong>, you must also specify the <strong>groupIds</strong> field. If you set the <strong>type</strong> field to <strong>Uuid</strong>, you must also specify the <strong>uuids</strong> field.
         *                   <p>
         *                   </blockquote>
         * @return {@code this}
         */
        public Builder targetInfo(java.util.Map<java.lang.String, ? extends java.lang.Object> targetInfo) {
            this.targetInfo = targetInfo;
            return this;
        }

        /**
         * Sets the value of {@link VulWhitelistProps#getWhitelist}
         * @param whitelist Property whitelist: The information about the vulnerability that you want to add to the whitelist. This parameter is required.
         *                  The value is a JSON string that contains the following fields:
         *                  <p>
         *                  <ul>
         *                  <li><strong>Status</strong>: the status of the vulnerability.</li>
         *                  <li><strong>GmtLast</strong>: the timestamp when the vulnerability was last detected. Unit: milliseconds.</li>
         *                  <li><strong>LaterCount</strong>: the number of vulnerabilities that have the medium priority.</li>
         *                  <li><strong>AsapCount</strong>: the number of vulnerabilities that have the high priority.</li>
         *                  <li><strong>Name</strong>: the name of the vulnerability.</li>
         *                  <li><strong>Type</strong>: the type of the vulnerability. Valid values:
         *                  <p>
         *                  <ul>
         *                  <li><strong>cve</strong>: Linux software vulnerability</li>
         *                  <li><strong>sys</strong>: Windows system vulnerability</li>
         *                  <li><strong>cms</strong>: Web-CMS vulnerability</li>
         *                  <li><strong>app</strong>: application vulnerability</li>
         *                  <li><strong>emg</strong>: urgent vulnerability</li>
         *                  </ul></li>
         *                  <li><strong>Related</strong>: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.</li>
         *                  <li><strong>HandledCount</strong>: the number of handled vulnerabilities.</li>
         *                  <li><strong>AliasName</strong>: the alias of the vulnerability.</li>
         *                  <li><strong>RuleModifyTime</strong>: the time when the vulnerability was last disclosed.</li>
         *                  <li><strong>NntfCount</strong>: the number of vulnerabilities that have the low priority.</li>
         *                  <li><strong>TotalFixCount</strong>: the total number of fixed vulnerabilities.</li>
         *                  <li><strong>Tags</strong>: the tag that is added to the vulnerability.</li>
         *                  </ul>
         *                  <p>
         *                  <blockquote>
         *                  <p>
         *                  You can call the <a href="~~DescribeGroupedVul~~">DescribeGroupedVul</a> operation to query the information about the vulnerability that you want to add to the whitelist.
         *                  <p>
         *                  </blockquote>
         * @return {@code this}
         */
        public Builder whitelist(com.aliyun.ros.cdk.core.IResolvable whitelist) {
            this.whitelist = whitelist;
            return this;
        }

        /**
         * Sets the value of {@link VulWhitelistProps#getWhitelist}
         * @param whitelist Property whitelist: The information about the vulnerability that you want to add to the whitelist. This parameter is required.
         *                  The value is a JSON string that contains the following fields:
         *                  <p>
         *                  <ul>
         *                  <li><strong>Status</strong>: the status of the vulnerability.</li>
         *                  <li><strong>GmtLast</strong>: the timestamp when the vulnerability was last detected. Unit: milliseconds.</li>
         *                  <li><strong>LaterCount</strong>: the number of vulnerabilities that have the medium priority.</li>
         *                  <li><strong>AsapCount</strong>: the number of vulnerabilities that have the high priority.</li>
         *                  <li><strong>Name</strong>: the name of the vulnerability.</li>
         *                  <li><strong>Type</strong>: the type of the vulnerability. Valid values:
         *                  <p>
         *                  <ul>
         *                  <li><strong>cve</strong>: Linux software vulnerability</li>
         *                  <li><strong>sys</strong>: Windows system vulnerability</li>
         *                  <li><strong>cms</strong>: Web-CMS vulnerability</li>
         *                  <li><strong>app</strong>: application vulnerability</li>
         *                  <li><strong>emg</strong>: urgent vulnerability</li>
         *                  </ul></li>
         *                  <li><strong>Related</strong>: the Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.</li>
         *                  <li><strong>HandledCount</strong>: the number of handled vulnerabilities.</li>
         *                  <li><strong>AliasName</strong>: the alias of the vulnerability.</li>
         *                  <li><strong>RuleModifyTime</strong>: the time when the vulnerability was last disclosed.</li>
         *                  <li><strong>NntfCount</strong>: the number of vulnerabilities that have the low priority.</li>
         *                  <li><strong>TotalFixCount</strong>: the total number of fixed vulnerabilities.</li>
         *                  <li><strong>Tags</strong>: the tag that is added to the vulnerability.</li>
         *                  </ul>
         *                  <p>
         *                  <blockquote>
         *                  <p>
         *                  You can call the <a href="~~DescribeGroupedVul~~">DescribeGroupedVul</a> operation to query the information about the vulnerability that you want to add to the whitelist.
         *                  <p>
         *                  </blockquote>
         * @return {@code this}
         */
        public Builder whitelist(java.util.Map<java.lang.String, ? extends java.lang.Object> whitelist) {
            this.whitelist = whitelist;
            return this;
        }

        /**
         * Sets the value of {@link VulWhitelistProps#getReason}
         * @param reason Property reason: The reason why you add the vulnerability to the whitelist.
         * @return {@code this}
         */
        public Builder reason(java.lang.String reason) {
            this.reason = reason;
            return this;
        }

        /**
         * Sets the value of {@link VulWhitelistProps#getReason}
         * @param reason Property reason: The reason why you add the vulnerability to the whitelist.
         * @return {@code this}
         */
        public Builder reason(com.aliyun.ros.cdk.core.IResolvable reason) {
            this.reason = reason;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link VulWhitelistProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public VulWhitelistProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link VulWhitelistProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VulWhitelistProps {
        private final java.lang.Object targetInfo;
        private final java.lang.Object whitelist;
        private final java.lang.Object reason;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.targetInfo = software.amazon.jsii.Kernel.get(this, "targetInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.whitelist = software.amazon.jsii.Kernel.get(this, "whitelist", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.reason = software.amazon.jsii.Kernel.get(this, "reason", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.targetInfo = java.util.Objects.requireNonNull(builder.targetInfo, "targetInfo is required");
            this.whitelist = java.util.Objects.requireNonNull(builder.whitelist, "whitelist is required");
            this.reason = builder.reason;
        }

        @Override
        public final java.lang.Object getTargetInfo() {
            return this.targetInfo;
        }

        @Override
        public final java.lang.Object getWhitelist() {
            return this.whitelist;
        }

        @Override
        public final java.lang.Object getReason() {
            return this.reason;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("targetInfo", om.valueToTree(this.getTargetInfo()));
            data.set("whitelist", om.valueToTree(this.getWhitelist()));
            if (this.getReason() != null) {
                data.set("reason", om.valueToTree(this.getReason()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.VulWhitelistProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            VulWhitelistProps.Jsii$Proxy that = (VulWhitelistProps.Jsii$Proxy) o;

            if (!targetInfo.equals(that.targetInfo)) return false;
            if (!whitelist.equals(that.whitelist)) return false;
            return this.reason != null ? this.reason.equals(that.reason) : that.reason == null;
        }

        @Override
        public final int hashCode() {
            int result = this.targetInfo.hashCode();
            result = 31 * result + (this.whitelist.hashCode());
            result = 31 * result + (this.reason != null ? this.reason.hashCode() : 0);
            return result;
        }
    }
}
